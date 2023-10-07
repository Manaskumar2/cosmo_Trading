
const News =require("../models/newsModel")

const createArticle = async (req, res) => {

    
    try {
        const { newsText } = req.body;
        const newsArticle = new News({ newsText });
        await newsArticle.save();
       return res.status(201).json({ message: 'News article created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status:false,message:error.message });
    }
    }
 
const getArticle = async (req, res) => {
    try {
        const latestNews = await News.findOne()
            .sort({ createdAt: -1 })
     

      return  res.status(200).json(latestNews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ status:false,message:error.message });
    }
};

module.exports ={createArticle,getArticle}