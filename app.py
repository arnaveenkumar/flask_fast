from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# In-memory storage for tasks (replace with a database for production)
tasks = []

@app.route("/")
def home():
    return render_template("index.html", tasks = tasks)

@app.route("/add", methods=["POST"])
def add_task():
    task_name = request.form.get("task")
    if task_name:
        tasks.append({"name": task_name, "completed": False})
    return redirect(url_for("home"))

@app.route("/complete/<int:task_id>")
def complete_task(task_id):
    if 0 <= task_id < len(tasks):
        tasks[task_id]["completed"] = not tasks[task_id]["completed"]
    return redirect(url_for("home"))

@app.route('/delete/<int:task_index>')
def delete_task(task_index):
    if 0 <= task_index < len(tasks):
        tasks.pop(task_index)
    return redirect(url_for('home'))

if __name__ == "__main__":
    app.run(debug=True)
