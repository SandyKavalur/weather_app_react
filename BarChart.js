import React, {useState} from 'react'
import {Bar} from 'react-chartjs-2'

const BarChart = () => {
    return <div>
        <Bar
            data={{
                labels: ['current_temp', 'min_temp',
                    'max_temp', 'feels_like', 'humidity'],
                
            }}
            height={400}
            width={600}
        />
    </div>
}

export default BarChart