const strokeDasharray = ((2 * 22) / 7) * 120;
const getStrokeDashoffset = (strokeDasharray, selectedSkillPersent) =>
  strokeDasharray - (((selectedSkillPersent / 100) * 2 * 22) / 7) * 120;

const CircleProgres = ({ selectedSkillPersent }) => (
  <svg className='transform -rotate-90 w-72 h-72'>
    <circle
      cx='145'
      cy='145'
      r='120'
      stroke='currentColor'
      strokeWidth='30'
      fill='transparent'
      className='text-white'
    />

    <circle
      cx='145'
      cy='145'
      r='120'
      stroke='currentColor'
      strokeWidth='30'
      fill='transparent'
      strokeDasharray={strokeDasharray}
      strokeDashoffset={getStrokeDashoffset(
        strokeDasharray,
        selectedSkillPersent
      )}
      className='text-primary duration-[2s]'
    />
  </svg>
);

export default CircleProgres;
