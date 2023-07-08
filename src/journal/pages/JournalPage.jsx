// import { Typography } from "@mui/material"
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        {/* <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non neque voluptates unde fugit natus voluptatibus, corporis minus aut reiciendis quo laborum voluptate nemo modi? Vero inventore maiores minus totam cum!</Typography> */}

        {/* <NothingSelectedView /> */}
        <NoteView />

        <IconButton
          size="large"
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
      </JournalLayout>
    </>
  )
}
