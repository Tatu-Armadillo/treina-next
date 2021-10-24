import { Button, Typography, Container } from '@mui/material'
import { FormElementsContainer, ProfissionaisPaper, ProfissionaisContainer } from '@styles/pages/index.style'
import type { NextPage } from 'next'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask'
import UserInformation from 'ui/components/UserInformation/UserInformation'

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os Profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localdiade'}
      />
      <Container>

        <FormElementsContainer>
          <TextFieldMask
            mask={'99.999-99'}
            label={'Digite seu CEP'}
            variant={'outlined'}
            fullWidth
          />
          <Typography color={'error'}>CEP invalido</Typography>
          <Button variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }} >
            Buscar
          </Button>
        </FormElementsContainer>

        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              picture={'https://github.com/Tatu-Armadillo.png'}
              name={'dedo'}
              rating={3}
              description={'Varzea Grande'}
            />
            <UserInformation
              picture={'https://github.com/Tatu-Armadillo.png'}
              name={'dedo'}
              rating={3}
              description={'Varzea Grande'}
            />
            <UserInformation
              picture={'https://github.com/Tatu-Armadillo.png'}
              name={'dedo'}
              rating={3}
              description={'Varzea Grande'}
            />
            <UserInformation
              picture={'https://github.com/Tatu-Armadillo.png'}
              name={'dedo'}
              rating={3}
              description={'Varzea Grande'}
            />
            <UserInformation
              picture={'https://github.com/Tatu-Armadillo.png'}
              name={'dedo'}
              rating={3}
              description={'Varzea Grande'}
            />
            <UserInformation
              picture={'https://github.com/Tatu-Armadillo.png'}
              name={'dedo'}
              rating={3}
              description={'Varzea Grande'}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  )
}

export default Home
