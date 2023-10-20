function CarItem({ car }) {
	return (
		<div className='col-sm-12 col-md-6 col-lg-4'>
			<div className='app-content-body'>
				<div className='card'>
					<img
						className='card-img'
						style={{
							backgroundImage: `url(${car.image})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center'
						}}
					/>

					<div key={car.id} className='card-body'>
						<h1 className='card-text'> {car.name}</h1>
						<p>{car.description}</p>
						<p> Мощность двигателя: {car.enginePower}</p>
						<p> Объем багажника: {car.trunkVolume}</p>
						<p> Расход топлива: {car.fuelConsumption}</p>
						<h5 className='card-title'>
							{new Intl.NumberFormat('ru-RU', {
								style: 'currency',
								currency: 'USD'
							}).format(car.price)}
						</h5>
						<a href='#' className='btn btn-primary'>
							{' '}
							Подробнее
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CarItem
