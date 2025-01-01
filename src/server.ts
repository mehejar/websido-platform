import mongoose from "mongoose"
import app from "./app"
import config from "./app/config"


async function main() {
    try {
        await mongoose.connect(config.data_url as string)
        // PORT, "0.0.0.0",

        app.listen(config.port, () => {
            console.log(`Websido App listening on port ${config.port}`)
        })
    } catch (err) {
        console.log(err)
    }
}
main()