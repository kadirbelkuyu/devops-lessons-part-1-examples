# Python sürümünü belirliyoruz ve base image olarak alıyoruz.
FROM python:3.9

# Çalışma dizinini belirliyoruz.
WORKDIR /app

# Gerekli kütüphaneleri yüklüyoruz.
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 81

CMD [ "python", "app.py" ]


