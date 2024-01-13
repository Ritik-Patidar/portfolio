import { useEffect, useState } from 'react';

/**
 * The `useExperience` is a custom React hook that calculates the years and months of
 * experience based on a start date and replaces placeholders in a given experience string with the
 * calculated values.
 * @param experienceString - The `experienceString` parameter is a string that represents a template
 * for displaying the experience. It may contain placeholders `{{years}}` and `{{months}}` which will
 * be replaced with the calculated years and months of experience.
 * @param startDate - The startDate parameter is a string representing the start date of the
 * experience. It should be in a format that can be parsed by the JavaScript Date constructor, such as
 * "YYYY-MM-DD".
 * @returns The `useExperience` function returns an object with two properties: `experience` and
 * `replacedExpString`.
 */
export const useExperience = (experienceString = '', startDate) => {
  const [experience, setExperience] = useState({ years: 0, months: 0 });
  const [replacedExpString, setNewExperienceString] = useState('');

  const replaceExperience = (expStr, years, months) => {
    return expStr
      .replaceAll('{{years}}', `${years} ${years > 1 ? 'years' : 'year'}`)
      .replaceAll('{{months}}', `${months} ${months > 1 ? 'months' : 'month'}`);
  };

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const expStartDate = new Date(startDate);
    const startYear = expStartDate.getFullYear();
    const startMonth = expStartDate.getMonth();
    let yearsExperience = currentYear - startYear;
    let monthsExperience = currentMonth - startMonth;

    if (monthsExperience < 0) {
      yearsExperience--;
      monthsExperience += 12;
    }
    const newExpString = replaceExperience(experienceString, yearsExperience, monthsExperience);
    setNewExperienceString(newExpString);
    setExperience({ years: yearsExperience || 0, months: monthsExperience || 0 });
  }, [experienceString, startDate]);

  return {
    experience,
    replacedExpString,
  };
};
