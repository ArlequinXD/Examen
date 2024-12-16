# Usa la imagen oficial de Python
FROM python:3.6.13

# Configura el directorio de trabajo
WORKDIR /app

# Copia los archivos al contenedor
COPY . /app

# Instala las dependencias
RUN pip install -r requirements.txt

# Expone el puerto 5000
EXPOSE 5000

# Define el comando para ejecutar la aplicación
CMD ["python", "app.py"]
