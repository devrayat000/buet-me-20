import clsx from "clsx"

const RoutineApp: React.FC = () => {
    const tableClass = clsx(
        'table-fixed',
        'prose-th:border-collapse prose-th:border prose-th:border-slate-500 prose-th:text-center prose-th:align-middle',
        'prose-td:border-collapse prose-td:border prose-td:border-slate-500 prose-td:text-center prose-td:align-middle'
    )
    return (
        <div>
            <table className={tableClass}>
                <thead>
                    <tr>
                        <th />
                        <th>1st</th>
                        <th>2nd</th>
                        <th>3rd</th>
                        <th>4th</th>
                        <th>5th</th>
                        <th>6th</th>
                        <th>Break</th>
                        <th>Sessional</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Saturday</td>
                        <td />
                        <ClassItem sub='Math' code={161} />
                        <ClassItem sub='Chem' code={109} />
                        <td />
                        <td />
                        <td />
                        <td rowSpan={5} />
                        <ClassItem sub='EEE' code={160} />
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <ClassItem sub='ME' code={101} />
                        <ClassItem sub='EEE' code={159} />
                        <ClassItem sub='Chem' code={109} />
                        <td />
                        <td />
                        <td />
                        <td />
                    </tr>
                    <tr>
                        <td>Monday</td>
                        <td />
                        <ClassItem sub='Chem' code={109} />
                        <ClassItem sub='Math' code={161} />
                        <ClassItem sub='Phy' code={105} />
                        <ClassItem sub='ME' code={101} />
                        <td />
                        <ClassItem sub='ME' code={160} />
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <ClassItem sub='EEE' code={159} />
                        <ClassItem sub='Phy' code={105} />
                        <td />
                        <ClassItem sub='Math' code={161} />
                        <td />
                        <td />
                        <ClassItem sub='Chem' code={114} />
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <ClassItem sub='ME' code={101} />
                        <ClassItem sub='Phy' code={105} />
                        <ClassItem sub='Math' code={161} />
                        <td />
                        <ClassItem sub='EEE' code={159} />
                        <td />
                        <ClassItem sub='Shop' code={160} />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RoutineApp

const ClassItem: React.FC<ClassItemInterface> = ({ sub, code }) => (
    <td className="prose-h3:m-0 prose-h4:m-0">
        <h3>{sub}</h3>
        <h4>{code}</h4>
    </td>
)

export interface ClassItemInterface {
    sub: string
    code: string | number
    children?: never
}