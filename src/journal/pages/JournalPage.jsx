
import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../view/NothingSelectedView"
import { NoteView } from "../view/NoteView"

export const JournalPage = () => {
    return (
    <JournalLayout>
{/*         <Typography variant="h1">JournalPage </Typography>
        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat expedita libero temporibus molestias doloribus, repudiandae laudantium iure inventore ratione? Labore dicta voluptas illum modi molestiae, molestias quia soluta odit.</Typography>
 */}
    {/* <NothingSelectedView/> */}
    <NoteView/>
    </JournalLayout>
    )
}