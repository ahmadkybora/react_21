import { slate, gray } from "./vars";

// let f_bg_slate = [];
// let f_slate = [];
// Object.values(slate).forEach(color => {
//     f_bg_slate.push({ backgroundColor: color });
//     f_slate.push({ color: color });
// });

let F_GRAY = [];
Object.values(gray).forEach(color => {
    F_GRAY.push({ backgroundColor: color[50] }, { color: color[50] });
});


// export const F_BG_SLATE = f_bg_slate;
// export const F_BG_SLATE_0 = { backgroundColor: slateColors.slate0 };
// export const F_BG_SLATE_1 = { backgroundColor: slateColors.slate1 };
// export const F_BG_SLATE_2 = { backgroundColor: slateColors.slate2 };
// export const F_BG_SLATE_3 = { backgroundColor: slateColors.slate3 };
// export const F_BG_SLATE_4 = { backgroundColor: slateColors.slate4 };
// export const F_BG_SLATE_5 = { backgroundColor: slateColors.slate5 };
// export const F_BG_SLATE_6 = { backgroundColor: slateColors.slate6 };
// export const F_BG_SLATE_7 = { backgroundColor: slateColors.slate7 };
// export const F_BG_SLATE_8 = { backgroundColor: slateColors.slate8 };
// export const F_BG_SLATE_9 = { backgroundColor: slateColors.slate9 };

// export const F_SLATE = f_slate;
// export const F_SLATE_0 = { color: slateColors.slate0 };
// export const F_SLATE_1 = { color: slateColors.slate1 };
// export const F_SLATE_2 = { color: slateColors.slate2 };
// export const F_SLATE_3 = { color: slateColors.slate3 };
// export const F_SLATE_4 = { color: slateColors.slate4 };
// export const F_SLATE_5 = { color: slateColors.slate5 };
// export const F_SLATE_6 = { color: slateColors.slate6 };
// export const F_SLATE_7 = { color: slateColors.slate7 };
// export const F_SLATE_8 = { color: slateColors.slate8 };
// export const F_SLATE_9 = { color: slateColors.slate9 };

// var response = '{"result":true,"count":1}';

// export const F_BG_GRAY_0 = { backgroundColor: gray[50] };
// export const F_BG_GRAY_1 = { backgroundColor: gray[100] };
// export const F_BG_GRAY_2 = { backgroundColor: gray[200] };
// export const F_BG_GRAY_3 = { backgroundColor: gray[300] };
// export const F_BG_GRAY_4 = { backgroundColor: gray[400] };
// export const F_BG_GRAY_5 = { backgroundColor: gray[500] };
// export const F_BG_GRAY_6 = { backgroundColor: gray[600] };
// export const F_BG_GRAY_7 = { backgroundColor: gray[700] };
// export const F_BG_GRAY_8 = { backgroundColor: gray[800] };
// export const F_BG_GRAY_9 = { backgroundColor: gray[900] };

export const F_GRAY_50 = { color: gray[50], backgroundColor: gray[50] };
export const F_GRAY_100 = { color: gray[100], backgroundColor: gray[100] };
export const F_GRAY_200 = { color: gray[200], backgroundColor: gray[200] };
export const F_GRAY_300 = { color: gray[300], backgroundColor: gray[300] };
export const F_GRAY_400 = { color: gray[400], backgroundColor: gray[400] };
export const F_GRAY_500 = { color: gray[500], backgroundColor: gray[500] };
export const F_GRAY_600 = { color: gray[600], backgroundColor: gray[600] };
export const F_GRAY_700 = { color: gray[700], backgroundColor: gray[700] };
export const F_GRAY_800 = { color: gray[800], backgroundColor: gray[800] };
export const F_GRAY_900 = { color: gray[900], backgroundColor: gray[900] };