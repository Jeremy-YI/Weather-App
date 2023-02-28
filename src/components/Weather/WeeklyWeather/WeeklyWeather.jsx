import moment from 'moment'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Box = styled.div`
  display: grid;
  background-color: lightblue;
  border: none 2px rgba(0, 0, 0, 0.3);
  grid-template-columns: repeat(7, 1fr);
  border-radius: 5px;
  box-shadow: 0px 3px 8px 0px rgb(0, 0, 0, 0.4);
  transition-property: transform, box-shadow;
  transition-duration: 0.3s;
  opacity: 1;
`
const Style = styled.div`
  margin: 1rem;
`
const UlStyle = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0.5rem;
`
const WeeklyWeather = ({ weather }) => {
  return (
    <div>
      <h2>DAILY FORCAST</h2>
      <hr />
      <Container>
        <UlStyle>
          <Box>
            {weather.forecast.forecastday.map((item, index) => (
              <Style>
                <img src={item.day.condition.icon} alt="" />
                <div>
                  Avg&nbsp;
                  {((item.day.maxtemp_c + item.day.mintemp_c) / 2).toFixed()}
                  &deg;C
                </div>
                {(item.date = moment().add(index, 'days').format('dddd'))}
              </Style>
            ))}
          </Box>
        </UlStyle>
      </Container>
    </div>
  )
}

export default WeeklyWeather
