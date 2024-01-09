import './Body.css'
import QuestionMark from '../../../assets/DashboardBody/QuestionMark.png'
import SearchLogo from '../../../assets/DashboardBody/search.svg'
import Icon1 from '../../../assets/DashboardBody/Icon1.svg'
import Icon2 from '../../../assets/DashboardBody/Icon2.svg'
import { DashboardBody } from './DashboardBody'



function BodyHeader() {
    return (
        <div className="body-header" >
            <div className='part-1' >
                <div className='box-1' >Payment</div>
                <div className='flex flex-row box-2' >
                    <div className='question-logo-div' >
                        <img className='question-logo' src={QuestionMark}>
                        </img>
                    </div>
                    <div className='question-logo-text' >How it works</div>
                </div>
            </div>
            <div className='part-2' >
                <div className='search-logo-div' >
                    <img src={SearchLogo} className='search-logo' ></img>
                </div>
                <div className='search-box' >
                    Search features, tutorials, etc.
                </div>
            </div>
            <div className='part-3' >
                <div className='box-1' >
                    <div className='logo-box-1' >
                        <div className='logo-container-1' >
                            <img src={Icon1} className='logo-1'  ></img>
                        </div>
                    </div>
                    <div className='logo-box-2' >
                        <div className='logo-container-2'   >
                            <img className='logo-2' src={Icon2} ></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}



export function Body(props) {
    return (
        <div>
            <div>
                <BodyHeader />
            </div>
            <div className='dashboard-body-p' >
                <DashboardBody />
            </div>
        </div>
    )
}