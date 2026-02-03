let todos=[];
let id=1;
exports.getTodo = (req,res)=>{
    res.status(200).json(todos)
};

exports.createTodo=(req,res)=>{
   const {task} = req.body;
   const newTodo = {
    id:id++,
    task,
    completed:false
   }
   todos.push(newTodo)
   res.json(newTodo)
};

exports.updateTodo=(req,res)=>{
    const todo=todos.find((t)=>t.id===parseInt(req.params.id))
    if(!todo){
        res.json({message:"Todo not found"})
    }
    todo.task=req.body.task || todo.task;
    todo.completed=req.body.completed===undefined?todo.completed:req.body.completed
    res.json(todo)
};

exports.deleteTodo=(req,res)=>{
    const index = todos.findIndex((t)=>t.id===parseInt(req.params.id))
    if(index===-1)
        return res.status(404).json({message:"Task not found"})
    todos=todos.filter((_,i)=>i!==index);
    res.status(200).json({message:"Task Deleted sucessfully"})
};