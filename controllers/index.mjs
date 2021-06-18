export default function initIndexController(db) {
  const index = (req, res) => {
    res.render('index');
  };

  // post request
  const handlePost = async (req, res) => {
    const { problem, errorText, commit } = req.body;
    try {
      await db.Bug.create({
        problem,
        errorText,
        commit,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return {
    index,
    handlePost,
  };
}
