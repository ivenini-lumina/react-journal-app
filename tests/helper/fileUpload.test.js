import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helper/fileUpload";

cloudinary.config({
    cloud_name: 'dsavxhtbe',
    api_key: '794938314544128',
    api_secret: 'rlUzat25KnNDy4D1PBbFj-zGq9Y',
    secure: true
});

describe('Prueba en fileUpload', () => { 
    test('Debe de subir el archivo correctamente a cloudinary', async () => { 
        const imageUrl = 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_3ds_download_software_7/SI_3DSDS_3DSonicTheHedgehog_image1600w.jpg';
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload( file );
        expect ( typeof url ).toBe('string');

        // console.log(url);
        const segments = url.split('/');
        const imageId = segments [ segments.length - 1 ].replace('.jpg', '');

        const cloudResp = await cloudinary.api.delete_resources( ['journal/' + imageId ], {
            resource_type: 'image'
        });

        // console.log({ cloudResp });
    });

    test('Debe de regresar null si falla', async () => { 
        const file = new File([], 'foto.jpg');
        const url = await fileUpload( file );
        expect ( url ).toBe(null);
    });

});