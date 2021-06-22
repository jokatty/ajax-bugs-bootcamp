export default function initBugController(db) {
  const bugs = async (req, res) => {
    const bugsList = await db.Bug.findAll();
    console.log(bugsList[0].id);
    res.send(bugsList);
  };

  return {
    bugs,
  };
}
