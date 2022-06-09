export default profile => {
    if (!profile) return false;

    let result = true;
    const model = ['aboutMe', 'contacts', 'lookingForAJob', 'lookingForAJobDescription', 'photos', 'status', 'followed', 'id', 'name'];
    const keys = Object.keys(profile);

    model.forEach(key => {
        if (!keys.includes(key)) result = false;
    });

    return result;
};