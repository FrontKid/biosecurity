import { FC } from 'react';

import cn from 'classnames';

import { Title2 } from '@/shared/ui/Title';

import css from './About.module.scss';

type TAboutProps = object;

const About: FC<TAboutProps> = () => {
  return (
    <>
      <div className={css.logoContainer}>
        <svg
          width='150'
          height='147'
          viewBox='0 0 150 147'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M81.696 13.3454C83.0091 14.2526 84.4654 14.9688 85.9694 15.4224C87.4735 15.876 89.0253 16.1148 90.4577 16.1386C91.1739 16.1386 91.8663 16.1386 92.5108 16.0431C93.1554 15.9715 93.7284 15.8999 94.2298 15.7805C94.4742 15.7316 94.7061 15.6702 94.9127 15.6155C95.1097 15.5634 95.2836 15.5174 95.4234 15.4941C95.7099 15.4224 95.877 15.3508 95.877 15.3508C95.877 15.3508 95.8771 15.1837 95.8532 14.8733C95.8343 14.7598 95.8228 14.6201 95.81 14.463V14.4629C95.7904 14.2236 95.7676 13.944 95.7099 13.6558C95.6383 13.1544 95.5189 12.5815 95.3518 11.9607C95.1847 11.34 94.9698 10.6954 94.7072 10.0031C94.182 8.66616 93.4181 7.28149 92.4392 6.04005C91.4843 4.79862 90.2906 3.70043 88.9775 2.79323C87.6406 1.88602 86.2082 1.16981 84.6803 0.716212C83.1762 0.262611 81.6244 0.0238737 80.192 0C79.4758 0 78.7834 0 78.1389 0.0716212C77.4943 0.143242 76.9213 0.214864 76.4199 0.334232C76.0515 0.407926 75.7114 0.495837 75.4437 0.565051L75.4434 0.565138L75.4424 0.565385C75.3637 0.585731 75.2913 0.604455 75.2263 0.620717C74.9398 0.692338 74.7727 0.763959 74.7727 0.763959C74.7727 0.763959 74.7727 0.931075 74.7965 1.21756C74.8198 1.35689 74.8373 1.53011 74.8575 1.72897L74.8575 1.72932L74.8576 1.72958L74.8576 1.72975V1.72978C74.8789 1.9396 74.903 2.17794 74.9398 2.43512C75.0114 2.93647 75.1546 3.50944 75.3218 4.13016C75.4889 4.75087 75.7037 5.39546 75.9663 6.06393C76.4916 7.40086 77.2555 8.78553 78.2344 10.027C79.1893 11.2684 80.383 12.3905 81.696 13.2977V13.3454ZM52.8564 10.4804C52.4506 9.95522 52.0925 9.45387 51.806 9.02415C51.6029 8.73641 51.4358 8.43666 51.3046 8.20149L51.3046 8.20146L51.3046 8.20136C51.2508 8.10488 51.2031 8.01927 51.1614 7.94983C51.0181 7.68722 50.9465 7.5201 50.9465 7.5201C50.9465 7.5201 51.0898 7.40073 51.3285 7.23362C51.4346 7.16995 51.569 7.078 51.7233 6.97242L51.7233 6.9724C51.9162 6.84043 52.1402 6.68717 52.3789 6.54128C52.8326 6.25479 53.3578 5.96831 53.9546 5.68182C54.5515 5.39534 55.2199 5.10885 55.9361 4.87012C57.3447 4.36877 58.9442 4.03454 60.6154 3.91517C62.2865 3.7958 63.9816 3.96291 65.6527 4.32102C67.3 4.67913 68.8996 5.29984 70.3559 6.11155C71.8122 6.92326 73.1014 7.92595 74.1757 9.00027C74.7248 9.54937 75.2022 10.0746 75.6081 10.5998C76.014 11.125 76.3721 11.6264 76.6585 12.0561C76.8617 12.3439 77.0288 12.6436 77.1599 12.8788C77.2137 12.9753 77.2615 13.061 77.3031 13.1304C77.4464 13.393 77.518 13.5602 77.518 13.5602C77.518 13.5602 77.3748 13.6795 77.136 13.8466C77.0302 13.9101 76.8962 14.0018 76.7423 14.1071L76.7422 14.1071L76.7415 14.1076L76.7412 14.1078C76.5483 14.2398 76.3243 14.3931 76.0856 14.539C75.632 14.8255 75.1068 15.1119 74.5099 15.3984C73.9131 15.6849 73.2446 15.9475 72.5284 16.2101C71.1198 16.7115 69.5203 17.0696 67.8491 17.1651C66.178 17.2845 64.4591 17.1412 62.8118 16.7592C61.1645 16.3773 59.5649 15.7804 58.1086 14.9448C56.6523 14.1331 55.3632 13.1304 54.2888 12.0561C53.7397 11.5309 53.2623 11.0057 52.8564 10.4804ZM31.9194 21.4863L32.0123 21.5619C32.371 21.854 32.7733 22.1816 33.2563 22.489C33.7577 22.8471 34.3307 23.1813 34.9275 23.4917C36.1451 24.1363 37.5297 24.6376 38.986 24.9241C40.4423 25.2106 41.9464 25.2345 43.4266 25.0435C44.9067 24.8286 46.363 24.3989 47.6761 23.7304C48.9891 23.062 50.2067 22.2025 51.2094 21.2476C51.7107 20.7701 52.1643 20.2926 52.5463 19.8151C52.9522 19.3377 53.2864 18.8841 53.549 18.4782C53.7333 18.2324 53.8781 17.9768 53.9961 17.7685L53.9961 17.7684L53.9962 17.7684L53.9962 17.7683L53.9965 17.7678L53.9966 17.7676L53.9967 17.7675L53.9967 17.7674C54.0619 17.6524 54.1188 17.5519 54.1697 17.4755C54.313 17.2368 54.3846 17.0697 54.3846 17.0697C54.3846 17.0697 54.2652 16.9503 54.0742 16.7354C53.8833 16.5444 53.5729 16.2341 53.1909 15.9237L53.0981 15.8482C52.7394 15.5561 52.3371 15.2285 51.854 14.921C51.3526 14.5629 50.7797 14.2287 50.159 13.8944C48.9414 13.2499 47.5567 12.7485 46.1004 12.462C44.6441 12.1755 43.1401 12.1517 41.6599 12.3427C40.1797 12.5575 38.7234 12.9872 37.4104 13.6557C36.0973 14.3242 34.8798 15.1836 33.8771 16.1386C33.3757 16.6161 32.9221 17.0935 32.5401 17.571C32.1343 18.0485 31.8 18.5021 31.5374 18.9079C31.3531 19.1536 31.2084 19.4092 31.0904 19.6175L31.0904 19.6176L31.0904 19.6176L31.0903 19.6176C31.0249 19.7331 30.9678 19.834 30.9167 19.9106C30.7735 20.1494 30.7018 20.3165 30.7018 20.3165C30.7018 20.3165 30.8212 20.4359 31.0122 20.6507C31.2032 20.8417 31.5136 21.1521 31.8955 21.4624L31.9194 21.4863ZM139.578 50.8111L139.578 50.8114L139.578 50.8116L139.578 50.8118L139.578 50.8119C139.887 51.2857 140.196 51.7602 140.473 52.2588V52.2827C140.807 52.8841 141.153 53.4854 141.494 54.0786L141.496 54.0824L141.497 54.0841L141.498 54.085C141.643 54.3374 141.787 54.5884 141.929 54.8372L143.218 57.4156C143.433 57.8214 143.648 58.275 143.839 58.7286L144.436 60.0894C145.988 63.6705 147.205 67.2993 148.113 70.9997C148.996 74.6763 149.569 78.4006 149.831 82.0771C150.094 85.7537 150.046 89.3825 149.712 92.9158C149.378 96.4491 148.853 99.8631 147.993 103.134C147.158 106.404 146.155 109.532 144.937 112.445C144.651 113.185 144.341 113.925 144.006 114.617C143.889 114.868 143.775 115.116 143.662 115.362C143.452 115.818 143.245 116.268 143.027 116.718C142.898 116.968 142.769 117.22 142.64 117.471C142.081 118.56 141.524 119.648 140.903 120.657C139.47 123.212 137.847 125.503 136.271 127.652C135.905 128.089 135.557 128.526 135.212 128.958L135.212 128.959L135.211 128.959L135.211 128.959L135.211 128.959L135.211 128.96L135.211 128.96L135.211 128.96L135.21 128.96L135.21 128.961L135.21 128.961C134.747 129.542 134.291 130.113 133.812 130.66C133.515 130.983 133.228 131.305 132.946 131.624C132.412 132.225 131.891 132.812 131.329 133.358C128.059 136.772 124.86 139.398 122.09 141.356C119.321 143.289 117.029 144.626 115.429 145.486C113.83 146.321 112.97 146.775 112.97 146.775C112.565 146.99 112.039 146.823 111.825 146.417C111.634 146.011 111.753 145.534 112.135 145.271H112.183C112.183 145.271 112.97 144.793 114.475 143.862C115.955 142.907 118.079 141.451 120.634 139.422C123.165 137.369 126.077 134.695 129.061 131.281C129.576 130.718 130.058 130.112 130.551 129.492C130.79 129.192 131.032 128.887 131.282 128.583C131.702 128.054 132.107 127.495 132.518 126.926C132.831 126.494 133.148 126.056 133.478 125.623C134.887 123.522 136.343 121.278 137.608 118.819C140.21 113.925 142.407 108.314 143.768 102.131C144.484 99.0514 144.937 95.8284 145.176 92.5338C145.415 89.2393 145.415 85.8492 145.105 82.4352C144.794 79.0213 144.245 75.5835 143.409 72.1457C142.55 68.7317 141.356 65.3178 139.948 62.0471C137.083 55.4102 133.048 49.203 128.106 43.8075C123.141 38.436 117.22 33.9716 110.87 30.5576C104.471 27.1675 97.6196 24.9712 90.8395 23.8491C84.0355 22.7748 77.2792 22.7509 71.0243 23.7059C67.873 24.1117 64.8649 24.8518 62 25.6635C61.2838 25.8784 60.5676 26.0932 59.8753 26.3081C59.4516 26.4542 59.0279 26.6092 58.6096 26.7623L58.6093 26.7624L58.6091 26.7625L58.6084 26.7627C58.3436 26.8596 58.0811 26.9557 57.8221 27.0482C56.8148 27.4016 55.8598 27.8074 54.9184 28.2074L54.9178 28.2077L54.9177 28.2077L54.9177 28.2077C54.5876 28.348 54.2591 28.4875 53.9307 28.6238C53.5686 28.777 53.1984 28.9627 52.8295 29.1477L52.8295 29.1478C52.566 29.2799 52.3033 29.4117 52.0447 29.531C51.8895 29.6027 51.7343 29.6803 51.5791 29.7579L51.579 29.7579C51.4238 29.8355 51.2687 29.9131 51.1136 29.9846L50.66 30.1995L50.5406 30.2473L50.5168 30.295H50.469L50.2541 30.4144C49.0853 31.0584 47.9641 31.6787 46.843 32.2989L46.8402 32.3004C45.7659 32.9689 44.7154 33.6373 43.7127 34.2819C43.3681 34.4856 43.0544 34.72 42.7444 34.9516L42.7443 34.9517L42.7441 34.9519L42.7439 34.952L42.7438 34.9521C42.5816 35.0733 42.4204 35.1937 42.2565 35.3085C41.9372 35.5606 41.606 35.8008 41.2797 36.0376L41.2796 36.0376C41.1424 36.1372 41.006 36.2361 40.8718 36.3351C37.2668 39.0805 34.3542 41.7783 32.1817 44.2134C31.9257 44.5028 31.6749 44.7766 31.4317 45.0422L31.4317 45.0422L31.4315 45.0424L31.4314 45.0424C31.1531 45.3463 30.8847 45.6393 30.6299 45.9323C30.1763 46.5053 29.7466 47.0305 29.3408 47.508C29.0726 47.8392 28.8149 48.1495 28.5745 48.4391L28.5741 48.4396L28.5705 48.4439C28.4485 48.5909 28.3309 48.7325 28.2187 48.8688C27.9718 49.1862 27.751 49.4906 27.5466 49.7724C27.4742 49.872 27.404 49.9689 27.3354 50.0625C26.2849 51.5188 25.7358 52.2827 25.7358 52.2827C25.4493 52.6647 24.9241 52.7363 24.5421 52.4737C24.184 52.2111 24.0885 51.7097 24.3273 51.3278C24.3273 51.3278 24.8525 50.5399 25.8074 49.0359C25.9317 48.837 26.069 48.6252 26.2124 48.4039L26.2125 48.4036C26.3446 48.1998 26.4819 47.988 26.6191 47.7706C26.825 47.4912 27.0399 47.1938 27.2638 46.8838L27.2646 46.8827L27.2648 46.8825C27.4042 46.6895 27.5471 46.4917 27.6935 46.2904C27.9877 45.9097 28.2819 45.5039 28.5943 45.073C28.7128 44.9094 28.834 44.7423 28.9588 44.5715C29.3251 44.0895 29.7382 43.6075 30.1728 43.1003L30.173 43.1001L30.1731 43.1L30.1738 43.0991C30.277 42.9787 30.3814 42.8568 30.4867 42.7332C32.6353 40.1071 35.5479 37.1706 39.1767 34.1626C39.6303 33.8045 40.1078 33.4225 40.5853 33.0405C41.0628 32.6585 41.5402 32.2765 42.0655 31.9184C42.504 31.6125 42.9468 31.3022 43.3959 30.9875L43.3962 30.9874C43.9983 30.5655 44.6117 30.1357 45.2407 29.6982C46.3627 29.0058 47.5325 28.2896 48.7262 27.5734L48.9411 27.4063H48.9888L49.0843 27.3585L49.2037 27.2869L49.6573 27.0482C49.9677 26.9049 50.278 26.7378 50.5884 26.5707C50.6935 26.5141 50.798 26.4575 50.9022 26.401L50.9028 26.4006L50.9034 26.4003L50.9053 26.3993C51.4154 26.1228 51.9203 25.8491 52.4744 25.5919C52.8646 25.4177 53.2588 25.2354 53.6565 25.0515C54.6215 24.6052 55.6071 24.1494 56.6046 23.7775C56.9348 23.6564 57.2599 23.5252 57.587 23.3931L57.5871 23.3931L57.5871 23.3931L57.5872 23.3931L57.5872 23.3931L57.5872 23.393L57.5873 23.393L57.5873 23.393L57.5874 23.393L57.5874 23.393L57.5875 23.393C57.9697 23.2387 58.3545 23.0834 58.7532 22.9419C59.1232 22.8106 59.4933 22.6853 59.8633 22.5599C60.2334 22.4346 60.6034 22.3092 60.9735 22.1779C63.9816 21.223 67.1329 20.3397 70.4513 19.8144C77.0644 18.6685 84.2504 18.5253 91.5318 19.528C98.7895 20.6023 106.143 22.8703 113.042 26.4036C119.918 29.9369 126.292 34.7355 131.664 40.4891C134.337 43.3778 136.773 46.5053 138.921 49.776C139.132 50.1265 139.354 50.4686 139.578 50.8111ZM34.9268 44.9064C34.9268 44.9064 35.0462 45.0258 35.2133 45.2645V45.2406C35.2701 45.3217 35.3406 45.4166 35.4194 45.5225L35.4195 45.5228L35.4196 45.5229C35.5725 45.7285 35.7562 45.9755 35.9295 46.2433C36.1921 46.6492 36.5025 47.1505 36.789 47.7235C37.0993 48.2965 37.3619 48.9172 37.6245 49.5857C38.1259 50.9226 38.484 52.4266 38.6034 53.9784C38.7227 55.5302 38.5795 57.1298 38.2214 58.6577C37.8394 60.2095 37.2426 61.6658 36.4309 63.0027C35.6192 64.3158 34.6165 65.5094 33.566 66.4644C33.0408 66.9419 32.5156 67.3716 31.9903 67.7536C31.489 68.1117 30.9876 68.4459 30.5579 68.6846C30.3063 68.8384 30.0629 68.9594 29.8565 69.0621C29.7103 69.1348 29.5826 69.1982 29.4836 69.2576C29.221 69.377 29.0539 69.4486 29.0539 69.4486C29.0539 69.4486 28.9345 69.3292 28.7674 69.0905C28.7114 69.0065 28.6335 68.9006 28.5437 68.7785C28.4038 68.5883 28.235 68.3588 28.0751 68.1117C27.7886 67.7058 27.5021 67.2045 27.2156 66.6315C26.9291 66.0585 26.6665 65.4378 26.4039 64.7694C25.9025 63.4324 25.5444 61.9284 25.4251 60.3766C25.2818 58.8248 25.4251 57.2253 25.7832 55.6973C26.1413 54.1694 26.7381 52.6892 27.5498 51.3523C28.3615 50.0393 29.3642 48.8456 30.4147 47.8906C30.9399 47.4131 31.4651 46.9834 31.9903 46.6014C32.4917 46.2433 32.993 45.9091 33.4228 45.6704C33.748 45.4599 34.0886 45.2954 34.334 45.177C34.3947 45.1476 34.4497 45.1211 34.4971 45.0974C34.7597 44.978 34.9268 44.9064 34.9268 44.9064ZM21.0328 49.0123C21.2715 48.4393 21.4625 47.8902 21.6057 47.4128C21.6967 47.1247 21.7588 46.8367 21.8103 46.5975L21.8103 46.5975C21.84 46.46 21.8661 46.3388 21.8922 46.243C21.9638 45.9565 21.9877 45.7894 21.9877 45.7894C21.9877 45.7894 21.8445 45.6939 21.5819 45.5745C21.5251 45.5487 21.4628 45.5196 21.3954 45.4881C21.1509 45.3737 20.8393 45.228 20.4837 45.097C20.0301 44.906 19.481 44.7389 18.8841 44.5718C18.2873 44.4047 17.6188 44.2614 16.9265 44.1421C15.5418 43.9272 14.0378 43.8795 12.5337 44.0943C11.0297 44.2853 9.5495 44.7628 8.18869 45.4313C6.82789 46.1236 5.53871 47.0069 4.46439 48.0574C3.39007 49.1078 2.48287 50.3254 1.8144 51.5668C1.48017 52.1875 1.19369 52.7844 0.95495 53.3573C0.716212 53.9303 0.525222 54.4794 0.38198 54.9569C0.291017 55.2449 0.228936 55.533 0.177397 55.7721C0.147775 55.9095 0.121635 56.0308 0.095495 56.1267C0.0238737 56.4132 0 56.5803 0 56.5803C0 56.5803 0.143242 56.6758 0.405854 56.7952C0.520826 56.837 0.658677 56.9016 0.815402 56.9752L0.815476 56.9752C1.01671 57.0697 1.24906 57.1787 1.50405 57.2726C1.95765 57.4636 2.50674 57.6307 3.10359 57.7978C3.70043 57.965 4.36889 58.1082 5.06123 58.2037C6.44591 58.4186 7.94996 58.4663 9.454 58.2514C10.958 58.0605 12.4382 57.583 13.799 56.9145C15.1598 56.2461 16.449 55.3627 17.5233 54.2884C18.5976 53.238 19.5048 52.0204 20.1733 50.779C20.5075 50.1582 20.794 49.5614 21.0328 48.9884V49.0123ZM14.5867 37.5523C14.0376 37.2658 13.5363 36.9793 13.1304 36.6929L13.1543 36.669C12.7815 36.4497 12.449 36.1901 12.2308 36.0198L12.1755 35.9767C11.9367 35.8095 11.8173 35.6902 11.8173 35.6902C11.8173 35.6902 11.889 35.523 12.0083 35.2604C12.0723 35.1539 12.1409 35.0093 12.2186 34.8458L12.2186 34.8458L12.2187 34.8457C12.315 34.6428 12.4253 34.4108 12.5574 34.1861C12.7962 33.7564 13.1065 33.255 13.4646 32.7537C13.8227 32.2523 14.2525 31.7271 14.7061 31.2019C15.6371 30.1515 16.7831 29.1488 18.0723 28.3609C19.3615 27.5492 20.7939 26.9763 22.274 26.5943C23.7542 26.2362 25.306 26.1168 26.8101 26.2362C28.3141 26.3555 29.7704 26.7375 31.0835 27.2389C31.7281 27.5015 32.3488 27.788 32.8979 28.0744C33.447 28.3609 33.9483 28.6474 34.3542 28.9339C34.7161 29.1681 35.0401 29.4213 35.2583 29.5919L35.2584 29.5919L35.333 29.6501C35.5717 29.8172 35.6911 29.9366 35.6911 29.9366C35.6911 29.9366 35.6195 30.1037 35.5001 30.3663C35.4304 30.4825 35.355 30.6383 35.2684 30.8172C35.1772 31.0058 35.0735 31.2201 34.951 31.4406C34.7123 31.8704 34.4019 32.3478 34.0438 32.8731C33.6857 33.3983 33.256 33.9235 32.8024 34.4487C31.8713 35.4992 30.7254 36.5019 29.4362 37.2897C28.1709 38.0775 26.7146 38.6744 25.2344 39.0325C23.7303 39.3906 22.1786 39.5338 20.6745 39.3906C19.1705 39.2712 17.7142 38.8892 16.4011 38.3879C15.7565 38.1253 15.1358 37.8388 14.5867 37.5523ZM110.679 21.177C109.246 20.6995 107.766 19.9833 106.405 19.0522L106.381 19.0761C104.997 18.145 103.755 16.9752 102.681 15.6622C101.631 14.3252 100.723 12.8689 100.103 11.3171C99.458 9.76535 99.076 8.18968 98.8851 6.68563C98.7896 5.94555 98.7418 5.22934 98.7418 4.56087C98.7418 3.89241 98.7657 3.29556 98.8134 2.77034C98.8396 2.49599 98.88 2.23593 98.9152 2.00974L98.9152 2.00962C98.9443 1.82252 98.9697 1.65859 98.9806 1.52891C99.0283 1.21855 99.076 1.05143 99.076 1.05143H99.5535C99.6439 1.05896 99.7508 1.06411 99.8707 1.06989C100.131 1.08243 100.452 1.09789 100.795 1.14693C101.32 1.19467 101.917 1.29017 102.562 1.43341C103.206 1.57665 103.899 1.76764 104.615 2.00638C106.047 2.48386 107.503 3.20007 108.888 4.13115C110.273 5.06222 111.538 6.23203 112.612 7.54509C113.687 8.85814 114.57 10.3383 115.215 11.8662C115.859 13.418 116.241 14.9937 116.432 16.4977C116.528 17.2378 116.576 17.954 116.576 18.6225C116.576 19.291 116.552 19.8878 116.504 20.413C116.478 20.6874 116.437 20.9474 116.402 21.1736L116.402 21.1737C116.373 21.3608 116.348 21.5248 116.337 21.6545C116.289 21.9648 116.241 22.1319 116.241 22.1319H115.764C115.673 22.1244 115.562 22.1192 115.438 22.1134C115.171 22.1008 114.841 22.0853 114.498 22.0364C113.973 21.9887 113.376 21.8932 112.732 21.75C112.087 21.6067 111.395 21.4157 110.679 21.177ZM91.1263 39.8455C90.2907 41.1347 89.67 42.5432 89.288 43.9279C89.097 44.6202 88.9299 45.2648 88.8344 45.8855C88.7389 46.5063 88.6673 47.0792 88.6195 47.5806C88.5914 47.8619 88.5881 48.1349 88.5853 48.3703V48.3705V48.3706C88.5833 48.5347 88.5816 48.6805 88.5718 48.7981V49.2517C88.5718 49.2517 88.7389 49.2995 89.0254 49.3472L89.0984 49.3608L89.184 49.377L89.1852 49.3772C89.4524 49.4279 89.8277 49.4991 90.2191 49.5382C90.7204 49.6098 91.2934 49.6576 91.9141 49.6576C92.5348 49.6576 93.2271 49.6576 93.9434 49.586C95.3519 49.4666 96.8559 49.1324 98.2884 48.5594C99.7208 48.0103 101.082 47.1986 102.299 46.1959C103.517 45.1932 104.567 44.0234 105.403 42.7342C106.238 41.445 106.859 40.0365 107.241 38.6518C107.432 37.9594 107.599 37.3149 107.695 36.6703C107.79 36.0496 107.862 35.4766 107.886 34.9752C107.913 34.6972 107.909 34.4272 107.905 34.1937V34.1935V34.1933V34.1931C107.902 34.0258 107.9 33.8772 107.91 33.7577V33.3041C107.91 33.3041 107.742 33.2563 107.456 33.2086C107.383 33.1954 107.296 33.1786 107.198 33.1597C106.941 33.11 106.608 33.0456 106.262 32.9937C105.761 32.9221 105.188 32.8743 104.543 32.8743C103.923 32.8743 103.23 32.8743 102.514 32.946C101.105 33.0653 99.6014 33.3996 98.169 33.9725C96.7366 34.5216 95.3758 35.3572 94.1582 36.336C92.9645 37.3387 91.8902 38.5085 91.0546 39.8216L91.1263 39.8455ZM86.7334 27.7415C87.3541 27.5982 87.927 27.5266 88.4284 27.4788C88.9297 27.4072 89.3595 27.4072 89.646 27.4072H90.0996C90.0996 27.4072 90.1473 27.5743 90.2189 27.8608C90.2382 27.9764 90.2691 28.1153 90.3038 28.2712L90.3041 28.2726L90.3042 28.2728C90.3555 28.503 90.415 28.7703 90.4577 29.0545C90.5532 29.5559 90.6009 30.1288 90.6487 30.7495C90.6725 31.3941 90.6964 32.0626 90.6487 32.7788C90.577 34.1874 90.2905 35.6914 89.7653 37.1477C89.2401 38.604 88.4761 39.9648 87.5212 41.2062C86.5662 42.4238 85.4203 43.522 84.155 44.3815C82.8897 45.2409 81.505 45.9094 80.1442 46.3391C79.4519 46.5778 78.8073 46.745 78.1866 46.8643C77.5658 46.9837 76.9929 47.0792 76.4915 47.1269C76.0141 47.1986 75.5843 47.1986 75.2978 47.1986H74.8442C74.8442 47.1986 74.7965 47.0314 74.7249 46.745C74.7055 46.629 74.6745 46.4896 74.6396 46.3331L74.6396 46.3329L74.6396 46.3328L74.6395 46.3325C74.5882 46.1024 74.5287 45.8353 74.4861 45.5513C74.3906 45.0499 74.3429 44.4769 74.2951 43.8562C74.2474 43.2355 74.2474 42.5671 74.2951 41.8508C74.3906 40.4423 74.6532 38.9382 75.1785 37.4819C75.6798 36.0256 76.4676 34.641 77.3987 33.3995C78.3537 32.1581 79.4996 31.0599 80.7649 30.2005C82.0302 29.341 83.4149 28.6725 84.7757 28.2428C85.468 28.0279 86.1126 27.8608 86.7334 27.7415ZM69.9974 28.0754C69.52 28.1947 68.9709 28.338 68.3979 28.529C67.8249 28.72 67.2042 28.9826 66.5835 29.2691C65.3421 29.8659 64.1006 30.6776 63.0263 31.6803C61.9281 32.683 61.0209 33.8767 60.3047 35.1898C59.5885 36.5028 59.0871 37.9352 58.8484 39.3915C58.5858 40.8478 58.5858 42.328 58.7529 43.6888C58.8484 44.3811 58.9439 45.0257 59.111 45.6226C59.2543 46.2194 59.4214 46.7685 59.5885 47.2221C59.6942 47.5568 59.8258 47.8654 59.926 48.1002L59.926 48.1002C59.9616 48.1837 59.9932 48.2577 60.0182 48.3203C60.1376 48.5829 60.2092 48.7262 60.2092 48.7262C60.2092 48.7262 60.3763 48.7262 60.6628 48.6545L60.776 48.6342C61.0404 48.5869 61.4186 48.5193 61.8326 48.4158C62.3101 48.2964 62.8592 48.1532 63.4322 47.9383C64.0051 47.7473 64.6259 47.4847 65.2466 47.1982C66.488 46.6014 67.7294 45.7897 68.8038 44.787C69.9019 43.7843 70.8092 42.5906 71.5492 41.3014C72.2654 39.9884 72.7668 38.5798 73.0294 37.1235C73.292 35.6672 73.292 34.1871 73.1249 32.8263C73.0294 32.1339 72.91 31.4893 72.7668 30.8925C72.6236 30.2956 72.4564 29.7465 72.2893 29.2929C72.1837 28.9583 72.052 28.6497 71.9519 28.415L71.9518 28.4148C71.9162 28.3314 71.8846 28.2573 71.8596 28.1947C71.7402 27.9321 71.6686 27.7889 71.6686 27.7889C71.6686 27.7889 71.5015 27.7889 71.215 27.8366C71.14 27.8503 71.0513 27.8639 70.9518 27.8792C70.7029 27.9175 70.3863 27.9662 70.0452 28.0515L69.9974 28.0754ZM51.1852 32.706C51.4717 33.1357 51.7582 33.6371 52.0685 34.2101H52.0924C52.4028 34.783 52.6893 35.4276 52.9519 36.0961C53.4771 37.4569 53.8591 38.9848 54.0023 40.5605C54.1456 42.16 54.0262 43.7834 53.692 45.3591C53.3339 46.9348 52.7609 48.4627 51.973 49.8474C51.1852 51.232 50.2303 52.4496 49.1798 53.4762C48.6546 53.9775 48.1294 54.4311 47.628 54.837C47.1267 55.2428 46.6492 55.5771 46.2195 55.8397C45.9356 56.0289 45.6621 56.1765 45.4404 56.2962C45.3265 56.3577 45.2262 56.4118 45.1452 56.4604C44.8825 56.6036 44.7154 56.6752 44.7154 56.6752C44.7154 56.6752 44.5961 56.5559 44.4289 56.3171C44.3747 56.2397 44.3079 56.1521 44.2334 56.0545C44.0784 55.8514 43.8901 55.6047 43.7127 55.3144C43.4262 54.8847 43.1398 54.3834 42.8294 53.8104C42.519 53.2374 42.2326 52.5928 41.97 51.9244C41.4447 50.5636 41.0627 49.0357 40.9195 47.46C40.7763 45.8604 40.8718 44.237 41.206 42.6614C41.5402 41.0857 42.1132 39.5578 42.901 38.1731C43.665 36.7884 44.6438 35.5709 45.6943 34.5443C46.2195 34.0429 46.7447 33.5893 47.246 33.1835C47.7713 32.7776 48.2487 32.4434 48.6785 32.1808C48.9624 31.9915 49.2358 31.844 49.4576 31.7243C49.5715 31.6628 49.6718 31.6087 49.7528 31.5601C50.0154 31.4168 50.1825 31.3452 50.1825 31.3452C50.1825 31.3452 50.3019 31.4646 50.469 31.7033C50.5232 31.7808 50.5901 31.8683 50.6645 31.9659C50.8196 32.1691 51.0078 32.4158 51.1852 32.706Z'
            fill='#D2DC3B'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M49.0845 93.8477C49.0845 113.615 65.1515 129.682 84.919 129.682C104.686 129.682 120.753 113.615 120.753 93.8477C120.753 74.0802 104.686 58.0132 84.919 58.0132C65.1515 58.0132 49.0845 74.0802 49.0845 93.8477ZM55.602 93.8477C55.602 77.6851 68.7564 64.5307 84.919 64.5307C101.081 64.5307 114.236 77.6851 114.236 93.8477C114.236 110.01 101.081 123.165 84.919 123.165C68.7564 123.165 55.602 110.01 55.602 93.8477ZM98.9362 85.6637C98.935 85.6538 98.9339 85.6439 98.9328 85.6341V85.658C98.9339 85.6599 98.9351 85.6618 98.9362 85.6637ZM98.9589 85.8338C98.9508 85.7759 98.9428 85.7191 98.9362 85.6637C100.367 88.0736 101.225 90.841 101.225 93.8467C101.225 102.847 93.9432 110.129 84.9428 110.129C75.9424 110.129 68.6609 102.823 68.6609 93.8467C68.6609 84.8701 75.9424 77.5648 84.9428 77.5648C88.309 77.5648 91.4365 78.5913 94.0387 80.3341C93.6567 80.2625 93.2747 80.2148 92.8928 80.2148C89.5266 80.2148 86.7811 82.9602 86.7811 86.3264C86.7811 89.6926 89.5266 92.4381 92.8928 92.4381C96.2589 92.4381 99.0044 89.6926 99.0044 86.3264C99.0044 86.1595 98.9811 85.9926 98.9589 85.8338Z'
            fill='black'
          />
        </svg>
      </div>
      <Title2 className={css.title}>About us</Title2>

      <p className={cn(css.text, css.textFirst)}>
        Our story began on a farm. With years of hands-on experience at various agricultural
        enterprises, we have created and continuously improving a robust system for reducing risks
        associated with production biosafety.
      </p>

      <p className={cn(css.text, css.textSecond)}>
        Our mission is to empower our clients to thrive in their businesses by maintaining an
        uncompromising standard of farm biosecurity. Our dedicated team is driven by a shared vision
        - to build a safer, more efficient future for our clients.
      </p>
      <p className={cn(css.text, css.textThird)}>
        We help our clients to run a successful business by maintaining a high level of farm
        biosecurity. Join us in safeguarding the future of agriculture.
      </p>

      <p className={cn(css.text, css.textFourth)}>
        With your happiness and safety in mind, BiosecurityAG team
      </p>
    </>
  );
};

export { About };
