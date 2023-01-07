async function hello(req, res) {
    res.status(200).send("hello");
}

exports.execute = hello;
