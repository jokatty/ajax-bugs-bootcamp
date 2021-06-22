export default function initFeatureController(db) {
  const index = async (req, res) => {
    const features = await db.Feature.findAll();
    res.send(features);
  };

  return {
    index,
  };
}
