const multer = require('multer');
const path = require('path');

// multer config
const storage = multer.diskStorage({
    destination : (req, file, cb) => {

        if( file.fieldname == 'photo' ){
            
            cb(null, path.join(__dirname, '../public/images'));
        }

        if( file.fieldname == 'pdf' ){
            cb(null, path.join(__dirname, '../public/pdf'));
        }

    },
    filename : (req, file, cb) => {
        if( file.fieldname == 'photo' ){
            cb(null, Date.now() + '_' + file.originalname  );
        }
    }
});

export const productUplaod = multer({
    storage : storage
}).array("students", 10)


export default storage