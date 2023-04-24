const { Router } = require("express");

// Criar o grupo de rotas
const router = Router();

const Tarefa = require("../models/tarefa");

router.get("/tarefas", async (req, res) => {
  try {
    const tarefas = await Tarefa.find({});
    res.status(200).json(tarefas);
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: "Ocorreu um erro." });
  }
})

router.get("/tarefas/:id", async(req, res) => {
  try {
    const tarefa = await Tarefa.findById(req.params.id);
    if (tarefa) {
      res.status(200).json(tarefa);
    }
    else {
      res.status(404).json({ message: "Tarefa não encontrada. "});
    }
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: "Ocorreu um erro." });
  }
})

router.post("/tarefas", async (req, res) => {
  try {
    const { titulo, descricao, status } = req.body;
    const tarefa = new Tarefa({ titulo, descricao, status });
    await tarefa.save();
    res.status(201).json(tarefa);
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: "Ocorreu um erro." });
  }
})

router.put("/tarefas/:id", async (req, res) => {
  try {
    const { titulo, descricao, status } = req.body;
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, { titulo, descricao, status });
    if (tarefa) {
      res.status(200).json({ message: "Tarefa editada." });
    }
    else {
      res.status(404).json({ message: "Tarefa não encontrada." });
    }
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: "Ocorreu um erro." });
  }
});

router.delete("/tarefas/:id", async (req, res) => {
  try {
    const tarefa = await Tarefa.findByIdAndDelete(req.params.id);
    if (tarefa) {
      res.status(200).json({ message: "Terefa deletada "});
    }
    else {
      res.status(404).json({ message: "Tarefa não encontrada." });
    }
  }
  catch (e) {
    console.log(e);
    res.status(500).json({ message: "Ocorreu um erro." });
  }
})

module.exports = router;