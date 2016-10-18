FROM python:3.3-alpine

WORKDIR /code

ADD requirements.txt /code

RUN pip install -r requirements.txt

ADD . /code

CMD ["gunicorn", "flask-bff:app", "-b", "0.0.0.0:80"]
