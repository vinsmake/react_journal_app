export const fileUpload = async(file) => {

    if(!file) throw new Error('No file selected');

    /* the cloudinary api POST url */
    const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/vinsmake/upload'

    /* we create a formData */
    const formData = new FormData();

    /* first, our upload preset is selected */
    formData.append('upload_preset','react-journal')

    /* tell the api that we're uploading a file, and select the file */
    formData.append('file',file)

    try {

        /* Here we're trying to do a http POST request, using cloudinary api */
        const resp = await fetch(cloudinaryUrl, {
            method: 'POST',
            body: formData
        });

        if (!resp.ok) {
            throw new Error('No se pudo subir la imagen')
        }

        const cloudinaryResp = await resp.json();

        return cloudinaryResp.secure_url

    } catch(error) {
        console.log(error);
        throw new Error(error.message)
    }
}