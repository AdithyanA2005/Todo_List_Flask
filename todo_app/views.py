from flask import render_template
from flask import request
from flask import redirect
from todo_app.app import app
from todo_app.app import db
from todo_app.model import Todo


@app.route("/")
def index():
    todo_list = Todo.query.all()
    return render_template('index.html', todo_list=todo_list)


@app.route("/add_todo", methods=['GET', 'POST'])
def add():
    title = request.form['title']
    descr = request.form['description']
    todo = Todo(title=title, description=descr)
    db.session.add(todo)
    db.session.commit()
    return redirect("/")


@app.route("/delete/<int:sno>", methods=['GET', 'POST'])
def delete(sno):
    todo = Todo.query.filter_by(todo_id=sno).first()
    db.session.delete(todo)
    db.session.commit()
    return redirect("/")


@app.route("/edit/<int:sno>", methods=['GET', 'POST'])
def edit(sno):
    todo = Todo.query.filter_by(todo_id=sno).first()
    return render_template('crud/update.html', todo=todo)

@app.route("/update/<int:sno>", methods=['GET', 'POST'])
def update(sno):
    title = request.form['title']
    descr = request.form['description']
    todo = Todo.query.filter_by(todo_id=sno).first()
    todo.title = title
    todo.description = descr
    db.session.add(todo)
    db.session.commit()
    return redirect("/")

