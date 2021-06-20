export default function initFeatureController(db) {
  const index = async (req, res) => {
    const features = await db.Feature.findAll();
    console.log(features);
    res.render('index', { features });
  };

  return {
    index,
  };
}
