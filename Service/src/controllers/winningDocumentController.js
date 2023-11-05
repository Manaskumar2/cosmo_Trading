const Document =require("../models/winningDocument")
const createDocument = async (req, res) => {
  try {
    const { documents } = req.body;
    const createdDocuments = await Document.insertMany(documents);
    res.json({ message: 'Documents created successfully', createdDocuments });
  } catch (error) {
     console.log(error)
    res.status(500).json({ error: 'An error occurred while creating documents' });
  }
};
// const updateDocument = async (req, res) => {
//   try {
//     const { documents } = req.body;
//     const updatedDocuments = [];

//     for (const doc of documents) {
//       const { id, name, winningAmount } = doc;
//       const updatedDocument = await Document.findByIdAndUpdate(
//         id,
//         { name, winningAmount },
//         { new: true }
//       );
//       updatedDocuments.push(updatedDocument);
//     }

//     res.json({ message: 'Documents updated successfully', updatedDocuments });
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred while updating documents' });
//   }
// }
const getDocument =  async (req, res) => {
  try {
    const documents = await Document.find();
    res.json({ documents });
  } catch (error) {
     console.log(error)
    res.status(500).json({ error: 'An error occurred while retrieving documents' });
  }
};
// API Endpoint 4: Delete All Documents
const deleteAllDocument =  async (req, res) => {
  try {
    await Document.deleteMany({});
    res.json({ message: 'All documents have been deleted.' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'An error occurred while deleting documents.' });
  }
};

module.exports ={createDocument,getDocument,deleteAllDocument}