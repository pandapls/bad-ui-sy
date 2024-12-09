import { makeStyles } from '@griffel/react';
import { Button } from 'bad-ui-sy';
const useClasses = makeStyles({
	root: {
		backgroundColor: 'pink',
		padding: '100px'
	}
})
export const Custom = () => {
	const styles = useClasses();
	return (
		<div className={styles.root}>
			<Button label='Custom Button' />
		</div>
	);
};


