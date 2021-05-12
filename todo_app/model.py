from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from todo_app.app import db


class Todo(db.Model):
    todo_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    date_added = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self) -> str:
        return f"\n{self.todo_id} -> {self.title}"
        