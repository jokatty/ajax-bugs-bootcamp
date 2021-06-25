export default function initFeatureController(db) {
  const index = async (req, res) => {
    const features = await db.Feature.findAll();
    res.send(features);
  };
  // post for submit features form
  const post = async (req, res) => {
    console.log(req.body);
    res.send('posted');
    const { featureName } = req.body;
    try {
      db.Feature.create({
        id: '5',
        name: featureName,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    index,
    post,
  };
}
