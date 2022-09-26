const { Schema, model } = require('mongoose');
const bcrypt = require("bcrypt")

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};


const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name cannot be left blank"],
    trim: true,
  },
  lastName:{
    type: String,
    required: [true,"Last name cannot be left blank"],
    trim: true,
  },
  email:{
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password:{
    type:String,
    required: true,
    minlength:5,
  },
  birthdate:{
    type:String,
    require: true,
    trim:true,
  },
  zipcode:{
    type:Number,
    required:true,
  }
})


// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// const UserMedia = model('UserMedia', userMediaSchema);
const User = model('User', userSchema);

module.exports = User;