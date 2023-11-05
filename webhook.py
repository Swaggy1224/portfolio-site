import requests
import json

def post_message_to_discord(message_content):
    """
    Posts a message to a Discord channel using a webhook.

    Args:
        message_content (str): The content of the message to be posted.

    Returns:
        bool: True if the message was successfully sent, False otherwise.
    """
    webhook_url = "https://discord.com/api/webhooks/1091467606503985252/YQabxy_UNmM43faIMECzeqfLSY_F1MhGgV3Krm3aGuIypgRraGlShMgqQ9KQ6NY0933N"  # Replace with your actual webhook URL

    try:
        payload = {
            "content": message_content
        }

        headers = {
            "Content-Type": "application/json"
        }

        response = requests.post(webhook_url, data=json.dumps(payload), headers=headers)

        if response.status_code == 204:
            print("Message sent successfully!")
            return True
        else:
            print(f"Failed to send message. Status code: {response.status_code}")
            return False

    except Exception as e:
        print(f"An error occurred: {e}")
        return False

