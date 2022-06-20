const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let globalId = 5;
let Blogs = [
  {
    title: "My New Website",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, modi eius delectus unde magnam ex autem excepturi. Expedita libero ipsum beatae itaque maxime aliquid quaerat, dolor fuga fugiat ipsam! Harum, voluptas tenetur aliquam dolores inventore voluptates sit accusamus excepturi quasi sapiente error ea! Quia hic sint quam non? Sunt minus doloremque cupiditate dolorem deleniti rem debitis reprehenderit est. Possimus, ab veritatis! Cum quaerat atque libero recusandae, voluptatem rerum eaque harum placeat accusamus dolores amet temporibus voluptates. Temporibus aspernatur nostrum saepe cum eligendi voluptates consequatur accusantium distinctio? Sit mollitia ea aliquid, consectetur praesentium voluptas impedit qui quis fugiat, ad quia recusandae.",
    author: "Ahmed",
    id: 0,
  },
  {
    title: "My New Skill React",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, modi eius delectus unde magnam ex autem excepturi. Expedita libero ipsum beatae itaque maxime aliquid quaerat, dolor fuga fugiat ipsam! Harum, voluptas tenetur aliquam dolores inventore voluptates sit accusamus excepturi quasi sapiente error ea! Quia hic sint quam non? Sunt minus doloremque cupiditate dolorem deleniti rem debitis reprehenderit est. Possimus, ab veritatis! Cum quaerat atque libero recusandae, voluptatem rerum eaque harum placeat accusamus dolores amet temporibus voluptates. Temporibus aspernatur nostrum saepe cum eligendi voluptates consequatur accusantium distinctio? Sit mollitia ea aliquid, consectetur praesentium voluptas impedit qui quis fugiat, ad quia recusandae.",
    author: "Ahmed",
    id: 1,
  },
  {
    title: "First React Project",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, modi eius delectus unde magnam ex autem excepturi. Expedita libero ipsum beatae itaque maxime aliquid quaerat, dolor fuga fugiat ipsam! Harum, voluptas tenetur aliquam dolores inventore voluptates sit accusamus excepturi quasi sapiente error ea! Quia hic sint quam non? Sunt minus doloremque cupiditate dolorem deleniti rem debitis reprehenderit est. Possimus, ab veritatis! Cum quaerat atque libero recusandae, voluptatem rerum eaque harum placeat accusamus dolores amet temporibus voluptates. Temporibus aspernatur nostrum saepe cum eligendi voluptates consequatur accusantium distinctio? Sit mollitia ea aliquid, consectetur praesentium voluptas impedit qui quis fugiat, ad quia recusandae.",
    author: "Ahmed",
    id: 2,
  },
  {
    title: "Mom and beautful Cake",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, modi eius delectus unde magnam ex autem excepturi. Expedita libero ipsum beatae itaque maxime aliquid quaerat, dolor fuga fugiat ipsam! Harum, voluptas tenetur aliquam dolores inventore voluptates sit accusamus excepturi quasi sapiente error ea! Quia hic sint quam non? Sunt minus doloremque cupiditate dolorem deleniti rem debitis reprehenderit est. Possimus, ab veritatis! Cum quaerat atque libero recusandae, voluptatem rerum eaque harum placeat accusamus dolores amet temporibus voluptates. Temporibus aspernatur nostrum saepe cum eligendi voluptates consequatur accusantium distinctio? Sit mollitia ea aliquid, consectetur praesentium voluptas impedit qui quis fugiat, ad quia recusandae.",
    author: "Mom",
    id: 3,
  },
  {
    title: "Mom and beautful Cake",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, modi eius delectus unde magnam ex autem excepturi. Expedita libero ipsum beatae itaque maxime aliquid quaerat, dolor fuga fugiat ipsam! Harum, voluptas tenetur aliquam dolores inventore voluptates sit accusamus excepturi quasi sapiente error ea! Quia hic sint quam non? Sunt minus doloremque cupiditate dolorem deleniti rem debitis reprehenderit est. Possimus, ab veritatis! Cum quaerat atque libero recusandae, voluptatem rerum eaque harum placeat accusamus dolores amet temporibus voluptates. Temporibus aspernatur nostrum saepe cum eligendi  voluptates consequatur accusantium distinctio? Sit mollitia ea aliquid, consectetur praesentium voluptas impedit qui quis fugiat, ad quia recusandae.",
    author: "Mom",
    id: 4,
  },
];

app.get("/blogs", (req, res) => {
  res.send(Blogs);
});
app.get("/blogs/:id", (req, res) => {
  const Blog = getById(req.params.id);
  res.send(Blog);
});
app.post("/blogs", (req, res) => {
  const newBlog = req.body;
  globalId++;
  newBlog.id = globalId;
  Blogs.push(newBlog);
  res.end();
});
app.delete("/blogs/:id", (req, res) => {
  Blogs = deleteById(req.params.id);
  res.end();
});

function deleteById(id) {
  const newBlogs = Blogs.filter((blog) => blog.id != id);
  return newBlogs;
}
function getById(id) {
  const newBlog = Blogs.filter((blog) => blog.id == id);
  return newBlog[0];
}

const PORT = 8000;
app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
