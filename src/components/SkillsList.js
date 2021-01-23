export default function SkillsList(props) {
    const skills = props.skills;
    const listItems = skills.map((skills) =>
        <li className='py-2 text-lg'>{skills}</li>
    );
    return (
        <ul className='align-center'>{listItems}</ul>
    );
}
