import {List, ListItem, Typography} from '@mui/material';

export default function About() {
  return (
    <>
      <Typography>
        Інструкція з використання TODO листа
      </Typography>

      <Typography fontWeight={700}>
        Додавання завдань:
      </Typography>
      <List>
        <ListItem>
            Введіть текст
        </ListItem>
        <ListItem>
          Нажміть кнопку Додати
        </ListItem>
      </List>
    </>
  );
}
