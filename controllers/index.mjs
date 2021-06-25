export default function initIndexController(db) {
  const index = (req, res) => {
    const features = [];
    res.render('index', { features });
  };

  // post request
  const handlePost = async (req, res) => {
    const {
      problem, errorText, commit, featureId,
    } = req.body;
    try {
      await db.Bug.create({
        problem,
        errorText,
        commit,
        featureId,
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
