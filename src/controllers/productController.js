'use strict'


exports.post = (req, res, next) => {
    res.status(201).json({ "message": "Produto criado!" });
}

exports.put = (req, res, next) => {
    const id = req.params.id;

    res.status(200).json({
        "message": "Produto atualizado",
        id: id,
        item: req.body,
    });
}

exports.delete = (req, res, next) => {
    const id = req.params.id;

    res.status(200).json({
        "message": "Produto deletado!",
        id: id,
        item: req.body,
    });
}
