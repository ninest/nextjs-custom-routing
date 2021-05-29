// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const { id } = req.query;
  res.status(200).json({ name: `Comments for Blog Post ${id}` });
};
