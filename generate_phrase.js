function getWord(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

function generateTrashTalk(select) {
    //include trash talk data
    const task = {
        engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
        designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
        entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

    };
    const phrase = ['很簡單', '很容易', '很快', '很正常'];
    const chinese = {
        engineer: '工程師',
        designer: '設計師',
        entrepreneur: '創業家'
    };

    //handle errors
    if (!select.job) return 'Please select a job title';

    //collect necessary data based on user selection
    let target = select.job;
    let targetTask = task[target];

    //generate trash talk string
    const trashTalk = `身為一個${chinese[target]}，${getWord(targetTask)}，${getWord(phrase)}吧！`;

    //return trash talk string
    return trashTalk;
}

module.exports = generateTrashTalk;
