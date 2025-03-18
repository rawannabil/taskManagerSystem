const validateTask = (req, res, next) => {
    const { title } = req.body;
    
    const errors = [];
      if (!title || title.trim() === '') {
      errors.push({Key:"title",description:'Title is required'});
    }
      if (errors.length > 0) {
      return res.status(400).json({ 
        Status : "Invalid",
        Response :null,
        Errors: errors });
    }
  
    next();
  };
  
  module.exports = validateTask;
  