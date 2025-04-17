from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# In-memory task list (not for production purpose)
tasks = []

@app.route("/")
def home():
    """Render the homepage with the current list of tasks."""
    return render_template("index.html", tasks=tasks)

@app.route("/add", methods=["GET", "POST"])
def add_task():
    """Add a new task to the list."""
    task_name = request.form.get("task")
    due_date = request.form.get('due_date')

    if task_name:
        tasks.append({
            "name": task_name,
            'due_date': due_date,
            "completed": False,
        })

    return redirect(url_for("home"))

@app.route("/complete/<int:task_id>")
def complete_task(task_id):
    """Toggle task completion status."""
    if 0 <= task_id < len(tasks):
        tasks[task_id]["completed"] = not tasks[task_id]["completed"]
    return redirect(url_for("home"))

@app.route("/delete/<int:task_index>")
def delete_task(task_index):
    """Delete a task from the list."""
    if 0 <= task_index < len(tasks):
        tasks.pop(task_index)
    return redirect(url_for("home"))

if __name__ == "__main__":
    app.run(debug=True)
