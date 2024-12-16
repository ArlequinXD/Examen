from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Lista de tareas como ejemplo
tasks = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add', methods=['POST'])
def add_task():
    task = request.json.get("task")
    if task:
        tasks.append({"task": task, "status": "incomplete"})
        return jsonify({"message": "Task added successfully", "tasks": tasks}), 201
    return jsonify({"message": "No task provided"}), 400

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
