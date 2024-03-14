console.log("Backuper is working");
const cron = require("node-cron");
const { exec } = require("child_process");
const fs = require("fs");
const archiver = require("archiver");
const axios = require("axios");
const FormData = require("form-data");

const TOKEN = "6844279005:AAGkWfvIBqo590DOi4aleSCxljx2E5pcS5s";
const CHAT_ID = "-1002060874995";
const MONGO_URI = "mongodb://localhost:27017/CRM";
const BACKUP_PATH = "./backup";

function backupDatabase() {
  const command = `mongodump --uri="${MONGO_URI}" --out="${BACKUP_PATH}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("Database backup created successfully");
    zipAndSend();
  });
}

async function zipAndSend() {
  const output = fs.createWriteStream("./backup/CRM.zip");
  const archive = archiver("zip", {
    zlib: { level: 9 },
  });

  output.on("close", function () {
    console.log(
      "Archive created successfully. Total bytes: " + archive.pointer()
    );
    sendDocumentToTelegramChannel("./backup/CRM.zip", CHAT_ID, TOKEN)
      .then(() => {
        console.log("Backup sent to Telegram successfully.");
      })
      .catch((err) => {
        console.error("Failed to send backup to Telegram:", err);
      });
  });

  archive.on("error", function (err) {
    throw err;
  });

  archive.pipe(output);

  archive.directory("./backup/CRM/", false);

  archive.finalize();
}

async function sendDocumentToTelegramChannel(filePath, chatId, botToken) {
  const url = `https://api.telegram.org/bot${botToken}/sendDocument`;
  const formData = new FormData();

  formData.append("document", fs.createReadStream(filePath));
  formData.append("chat_id", chatId);

  try {
    const response = await axios.post(url, formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    console.log("Document sent successfully:", response.data);
  } catch (error) {
    console.error("Failed to send document:", error);
  }
}
cron.schedule(
  "* * * * *",
  () => {
    console.log("Starting scheduled database backup");
    backupDatabase();
  },
  {
    scheduled: true,
    timezone: "America/New_York",
  }
);
