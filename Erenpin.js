import pywhatkit as kit
import requests
from bs4 import BeautifulSoup
import os

def download_pinterest_video(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    video_tag = soup.find('video')

    if video_tag and video_tag['src']:
        video_url = video_tag['src']
        video_response = requests.get(video_url)

        file_name = "pinterest_video.mp4"
        with open(file_name, 'wb') as video_file:
            video_file.write(video_response.content)
        return file_name
    else:
        return None

def send_video_whatsapp(212690349201, video_path, message):
    kit.sendwhats_image(212690349201, video_path, caption=message)

# مثال على الاستخدام:
pinterestvid = "رابط الفيديو من بينتريست هنا"
phone_number = "+212690349201"
message = "شاهد هذا الفيديو من بينتريست!"

video_path = download_pinterest_video(pinterest_video_url)

if video_path:
    send_video_whatsapp(212690349201, video_path, message)
else:
    print("لم أتمكن من تحميل الفيديو من بينتريست.")
