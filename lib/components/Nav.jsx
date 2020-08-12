import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Nav = (props) => {
  const router = useRouter()

  const accountPage = router.pathname.match('account')
  const prizesPage = router.pathname.match('prizes')
  const poolPage = !accountPage && !prizesPage

  return <>
    <nav
      className='flex flex-col items-start hidden sm:block pt-6 font-bold'
    >
      <Link
        href='/'
        as='/'
        shallow
      >
        <a
          className={classnames(
            'h-full w-full flex justify-start items-center px-10 text-xxs sm:text-base py-1 sm:py-2 px-3 sm:px-10 trans tracking-wider outline-none focus:outline-none active:outline-none',
            {
              'text-accent-3 hover:text-highlight-2': !poolPage,
              'text-highlight-2 hover:text-highlight-2': poolPage
            }
          )}
        >
          <svg
            style={{
              width: 28
            }}
            className='fill-current'
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.59199 7C2.48021 7 2.36627 6.99068 2.25039 6.9719C1.82048 6.90055 1.50518 6.68775 1.22814 6.46833C0.968405 6.26262 0.923818 5.88431 1.1286 5.62337C1.33336 5.36244 1.70993 5.31765 1.96966 5.52338C2.14951 5.66579 2.29147 5.75913 2.44326 5.78434C2.70793 5.82724 2.91268 5.76202 3.10498 5.57271C3.25497 5.4257 3.40547 5.27006 3.55103 5.11955C3.63993 5.02759 3.7288 4.93569 3.81839 4.84472C4.33765 4.31681 5.0133 4.02359 5.72069 4.01935C6.42952 4.01478 7.10748 4.30032 7.63335 4.82243C7.75915 4.94697 7.8824 5.07464 8.0016 5.1981C8.11677 5.31737 8.22552 5.43003 8.33748 5.54131C8.66411 5.86632 9.10293 5.86623 9.4298 5.54134C9.55173 5.42005 9.6754 5.29217 9.79497 5.16847C9.9195 5.03965 10.0483 4.90645 10.1798 4.77571C11.2167 3.74527 12.8446 3.74217 13.8859 4.76861C14.0665 4.94589 14.2434 5.12945 14.4146 5.30697C14.476 5.37068 14.5375 5.43443 14.5992 5.49799C14.7818 5.68489 14.9858 5.78452 15.1879 5.78482C15.1882 5.78482 15.1885 5.78482 15.1887 5.78482C15.3928 5.78482 15.5998 5.68387 15.7876 5.49282C15.8886 5.38978 15.9891 5.28564 16.0895 5.18155C16.2152 5.05127 16.3451 4.91659 16.476 4.78444C17.5135 3.74214 19.1415 3.73823 20.1833 4.77451C20.3143 4.90474 20.4425 5.0374 20.5666 5.16573C20.6866 5.28988 20.8107 5.41827 20.9333 5.54019C21.2484 5.85413 21.6693 5.86481 22.0059 5.56784C22.2544 5.34854 22.6329 5.37321 22.8511 5.62289C23.0693 5.87257 23.0448 6.25273 22.7963 6.47197C21.9884 7.18468 20.8505 7.15225 20.0903 6.39495C19.9597 6.26509 19.8314 6.13237 19.7074 6.0041C19.5874 5.87992 19.4632 5.75152 19.3407 5.62963C18.7643 5.05632 17.8973 5.05828 17.3241 5.63423C17.1998 5.75971 17.0726 5.89156 16.9496 6.01902C16.8468 6.12554 16.744 6.23209 16.6403 6.33783C16.2281 6.75733 15.7128 6.98809 15.1887 6.98812C15.1879 6.98812 15.1871 6.98812 15.1863 6.98812C14.6636 6.9874 14.1511 6.75709 13.7431 6.33957C13.6791 6.27366 13.6166 6.20886 13.5542 6.14413C13.3811 5.96454 13.2175 5.79493 13.0479 5.62837C12.4686 5.05731 11.5981 5.05885 11.0222 5.6311C10.8992 5.75336 10.7746 5.88226 10.6542 6.00686C10.5306 6.13468 10.4028 6.26686 10.2724 6.39661C9.48011 7.18398 8.28616 7.18383 7.49495 6.39652C7.37446 6.27682 7.25621 6.15433 7.14186 6.03589C7.02199 5.91174 6.90877 5.79448 6.79202 5.67887C6.49528 5.38425 6.12077 5.22262 5.73614 5.22262C5.73339 5.22262 5.73066 5.22262 5.72791 5.22265C5.34047 5.22499 4.96482 5.39123 4.67021 5.69076C4.58295 5.77938 4.49662 5.86866 4.41023 5.95801C4.2592 6.11423 4.10298 6.27577 3.94239 6.43316C3.56232 6.80714 3.10037 6.99997 2.59199 7Z" />
            <path d="M2.59199 11C2.48021 11 2.36627 10.9907 2.25039 10.9719C1.82048 10.9005 1.50518 10.6877 1.22814 10.4683C0.968405 10.2626 0.923818 9.88431 1.1286 9.62337C1.33336 9.36244 1.70993 9.31765 1.96966 9.52338C2.14951 9.66579 2.29147 9.75913 2.44326 9.78434C2.70793 9.82724 2.91268 9.76202 3.10498 9.57271C3.25497 9.4257 3.40547 9.27006 3.55103 9.11955C3.63993 9.02759 3.7288 8.93569 3.81839 8.84472C4.33765 8.31681 5.0133 8.02359 5.72069 8.01935C6.42952 8.01478 7.10748 8.30032 7.63335 8.82243C7.75915 8.94697 7.8824 9.07464 8.0016 9.1981C8.11677 9.31737 8.22552 9.43003 8.33748 9.54131C8.66411 9.86632 9.10293 9.86623 9.4298 9.54134C9.55173 9.42005 9.6754 9.29217 9.79497 9.16847C9.9195 9.03965 10.0483 8.90645 10.1798 8.77571C11.2167 7.74527 12.8446 7.74217 13.8859 8.76861C14.0665 8.94589 14.2434 9.12945 14.4146 9.30697C14.476 9.37068 14.5375 9.43443 14.5992 9.49799C14.7818 9.68489 14.9858 9.78452 15.1879 9.78482C15.1882 9.78482 15.1885 9.78482 15.1887 9.78482C15.3928 9.78482 15.5998 9.68387 15.7876 9.49282C15.8886 9.38978 15.9891 9.28564 16.0895 9.18155C16.2152 9.05127 16.3451 8.91659 16.476 8.78444C17.5135 7.74214 19.1415 7.73823 20.1833 8.77451C20.3143 8.90474 20.4425 9.0374 20.5666 9.16573C20.6866 9.28988 20.8107 9.41827 20.9333 9.54019C21.2484 9.85413 21.6693 9.86481 22.0059 9.56784C22.2544 9.34854 22.6329 9.37321 22.8511 9.62289C23.0693 9.87257 23.0448 10.2527 22.7963 10.472C21.9884 11.1847 20.8505 11.1522 20.0903 10.395C19.9597 10.2651 19.8314 10.1324 19.7074 10.0041C19.5874 9.87992 19.4632 9.75152 19.3407 9.62963C18.7643 9.05632 17.8973 9.05828 17.3241 9.63423C17.1998 9.75971 17.0726 9.89156 16.9496 10.019C16.8468 10.1255 16.744 10.2321 16.6403 10.3378C16.2281 10.7573 15.7128 10.9881 15.1887 10.9881C15.1879 10.9881 15.1871 10.9881 15.1863 10.9881C14.6636 10.9874 14.1511 10.7571 13.7431 10.3396C13.6791 10.2737 13.6166 10.2089 13.5542 10.1441C13.3811 9.96454 13.2175 9.79493 13.0479 9.62837C12.4686 9.05731 11.5981 9.05885 11.0222 9.6311C10.8992 9.75336 10.7746 9.88226 10.6542 10.0069C10.5306 10.1347 10.4028 10.2669 10.2724 10.3966C9.48011 11.184 8.28616 11.1838 7.49495 10.3965C7.37446 10.2768 7.25621 10.1543 7.14186 10.0359C7.02199 9.91174 6.90877 9.79448 6.79202 9.67887C6.49528 9.38425 6.12077 9.22262 5.73614 9.22262C5.73339 9.22262 5.73066 9.22262 5.72791 9.22265C5.34047 9.22499 4.96482 9.39123 4.67021 9.69076C4.58295 9.77938 4.49662 9.86866 4.41023 9.95801C4.2592 10.1142 4.10298 10.2758 3.94239 10.4332C3.56232 10.8071 3.10037 11 2.59199 11Z" />
            <path d="M2.59199 15C2.48021 15 2.36627 14.9907 2.25039 14.9719C1.82048 14.9005 1.50518 14.6877 1.22814 14.4683C0.968405 14.2626 0.923818 13.8843 1.1286 13.6234C1.33336 13.3624 1.70993 13.3176 1.96966 13.5234C2.14951 13.6658 2.29147 13.7591 2.44326 13.7843C2.70793 13.8272 2.91268 13.762 3.10498 13.5727C3.25497 13.4257 3.40547 13.2701 3.55103 13.1196C3.63993 13.0276 3.7288 12.9357 3.81839 12.8447C4.33765 12.3168 5.0133 12.0236 5.72069 12.0194C6.42952 12.0148 7.10748 12.3003 7.63335 12.8224C7.75915 12.947 7.8824 13.0746 8.0016 13.1981C8.11677 13.3174 8.22552 13.43 8.33748 13.5413C8.66411 13.8663 9.10293 13.8662 9.4298 13.5413C9.55173 13.42 9.6754 13.2922 9.79497 13.1685C9.9195 13.0397 10.0483 12.9064 10.1798 12.7757C11.2167 11.7453 12.8446 11.7422 13.8859 12.7686C14.0665 12.9459 14.2434 13.1295 14.4146 13.307C14.476 13.3707 14.5375 13.4344 14.5992 13.498C14.7818 13.6849 14.9858 13.7845 15.1879 13.7848C15.1882 13.7848 15.1885 13.7848 15.1887 13.7848C15.3928 13.7848 15.5998 13.6839 15.7876 13.4928C15.8886 13.3898 15.9891 13.2856 16.0895 13.1816C16.2152 13.0513 16.3451 12.9166 16.476 12.7844C17.5135 11.7421 19.1415 11.7382 20.1833 12.7745C20.3143 12.9047 20.4425 13.0374 20.5666 13.1657C20.6866 13.2899 20.8107 13.4183 20.9333 13.5402C21.2484 13.8541 21.6693 13.8648 22.0059 13.5678C22.2544 13.3485 22.6329 13.3732 22.8511 13.6229C23.0693 13.8726 23.0448 14.2527 22.7963 14.472C21.9884 15.1847 20.8505 15.1522 20.0903 14.395C19.9597 14.2651 19.8314 14.1324 19.7074 14.0041C19.5874 13.8799 19.4632 13.7515 19.3407 13.6296C18.7643 13.0563 17.8973 13.0583 17.3241 13.6342C17.1998 13.7597 17.0726 13.8916 16.9496 14.019C16.8468 14.1255 16.744 14.2321 16.6403 14.3378C16.2281 14.7573 15.7128 14.9881 15.1887 14.9881C15.1879 14.9881 15.1871 14.9881 15.1863 14.9881C14.6636 14.9874 14.1511 14.7571 13.7431 14.3396C13.6791 14.2737 13.6166 14.2089 13.5542 14.1441C13.3811 13.9645 13.2175 13.7949 13.0479 13.6284C12.4686 13.0573 11.5981 13.0588 11.0222 13.6311C10.8992 13.7534 10.7746 13.8823 10.6542 14.0069C10.5306 14.1347 10.4028 14.2669 10.2724 14.3966C9.48011 15.184 8.28616 15.1838 7.49495 14.3965C7.37446 14.2768 7.25621 14.1543 7.14186 14.0359C7.02199 13.9117 6.90877 13.7945 6.79202 13.6789C6.49528 13.3842 6.12077 13.2226 5.73614 13.2226C5.73339 13.2226 5.73066 13.2226 5.72791 13.2226C5.34047 13.225 4.96482 13.3912 4.67021 13.6908C4.58295 13.7794 4.49662 13.8687 4.41023 13.958C4.2592 14.1142 4.10298 14.2758 3.94239 14.4332C3.56232 14.8071 3.10037 15 2.59199 15Z" />
            <path d="M2.59199 19C2.48021 19 2.36627 18.9907 2.25039 18.9719C1.82048 18.9005 1.50518 18.6877 1.22814 18.4683C0.968405 18.2626 0.923818 17.8843 1.1286 17.6234C1.33336 17.3624 1.70993 17.3176 1.96966 17.5234C2.14951 17.6658 2.29147 17.7591 2.44326 17.7843C2.70793 17.8272 2.91268 17.762 3.10498 17.5727C3.25497 17.4257 3.40547 17.2701 3.55103 17.1196C3.63993 17.0276 3.7288 16.9357 3.81839 16.8447C4.33765 16.3168 5.0133 16.0236 5.72069 16.0194C6.42952 16.0148 7.10748 16.3003 7.63335 16.8224C7.75915 16.947 7.8824 17.0746 8.0016 17.1981C8.11677 17.3174 8.22552 17.43 8.33748 17.5413C8.66411 17.8663 9.10293 17.8662 9.4298 17.5413C9.55173 17.42 9.6754 17.2922 9.79497 17.1685C9.9195 17.0397 10.0483 16.9064 10.1798 16.7757C11.2167 15.7453 12.8446 15.7422 13.8859 16.7686C14.0665 16.9459 14.2434 17.1295 14.4146 17.307C14.476 17.3707 14.5375 17.4344 14.5992 17.498C14.7818 17.6849 14.9858 17.7845 15.1879 17.7848C15.1882 17.7848 15.1885 17.7848 15.1887 17.7848C15.3928 17.7848 15.5998 17.6839 15.7876 17.4928C15.8886 17.3898 15.9891 17.2856 16.0895 17.1816C16.2152 17.0513 16.3451 16.9166 16.476 16.7844C17.5135 15.7421 19.1415 15.7382 20.1833 16.7745C20.3143 16.9047 20.4425 17.0374 20.5666 17.1657C20.6866 17.2899 20.8107 17.4183 20.9333 17.5402C21.2484 17.8541 21.6693 17.8648 22.0059 17.5678C22.2544 17.3485 22.6329 17.3732 22.8511 17.6229C23.0693 17.8726 23.0448 18.2527 22.7963 18.472C21.9884 19.1847 20.8505 19.1522 20.0903 18.395C19.9597 18.2651 19.8314 18.1324 19.7074 18.0041C19.5874 17.8799 19.4632 17.7515 19.3407 17.6296C18.7643 17.0563 17.8973 17.0583 17.3241 17.6342C17.1998 17.7597 17.0726 17.8916 16.9496 18.019C16.8468 18.1255 16.744 18.2321 16.6403 18.3378C16.2281 18.7573 15.7128 18.9881 15.1887 18.9881C15.1879 18.9881 15.1871 18.9881 15.1863 18.9881C14.6636 18.9874 14.1511 18.7571 13.7431 18.3396C13.6791 18.2737 13.6166 18.2089 13.5542 18.1441C13.3811 17.9645 13.2175 17.7949 13.0479 17.6284C12.4686 17.0573 11.5981 17.0588 11.0222 17.6311C10.8992 17.7534 10.7746 17.8823 10.6542 18.0069C10.5306 18.1347 10.4028 18.2669 10.2724 18.3966C9.48011 19.184 8.28616 19.1838 7.49495 18.3965C7.37446 18.2768 7.25621 18.1543 7.14186 18.0359C7.02199 17.9117 6.90877 17.7945 6.79202 17.6789C6.49528 17.3842 6.12077 17.2226 5.73614 17.2226C5.73339 17.2226 5.73066 17.2226 5.72791 17.2226C5.34047 17.225 4.96482 17.3912 4.67021 17.6908C4.58295 17.7794 4.49662 17.8687 4.41023 17.958C4.2592 18.1142 4.10298 18.2758 3.94239 18.4332C3.56232 18.8071 3.10037 19 2.59199 19Z" />
          </svg>

          <span className='pl-2'>Pools</span>
        </a>
      </Link>

      <Link
        href='/prizes/[symbol]'
        as='/prizes/PT-cDAI'
        shallow
      >
        <a
          className={classnames(
            'h-full w-full flex justify-start items-center px-10 text-xxs sm:text-base py-1 sm:py-2 px-3 sm:px-10 trans tracking-wider outline-none focus:outline-none active:outline-none',
            {
              'text-accent-3 hover:text-highlight-2': !prizesPage,
              'text-highlight-2 hover:text-highlight-2': prizesPage
            }
          )}
        >
          <svg
            style={{
              width: 28
            }}
            className='fill-current'
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M13.1337 1.03123C13.1362 1.01979 13.1374 1.00831 13.1373 0.996788C13.133 0.505273 10.7548 0.127546 7.82534 0.153111C4.89592 0.178676 2.45342 0.597851 2.45771 1.08937C2.45789 1.10951 2.46217 1.12945 2.47042 1.14919C2.46718 1.19009 2.4681 1.23739 2.47427 1.29198C2.51535 1.65539 2.57793 2.70538 2.60408 3.18494L0.685635 3.18859C0.45002 3.18062 0.0144185 3.31608 0.15693 3.92163C0.185911 4.04478 0.228421 4.25543 0.282994 4.52586L0.283043 4.5261L0.283046 4.52611C0.563937 5.91804 1.16431 8.89309 1.88437 9.67371C2.39038 10.2786 3.07251 10.5802 3.60284 10.7054C4.0446 10.837 4.50537 10.8141 4.6647 10.8062L4.66474 10.8062L4.66509 10.8062C4.68775 10.8051 4.70427 10.8043 4.71372 10.8043C5.06812 11.3337 5.97399 12.478 6.76221 12.8198C7.01919 12.9127 7.01708 13.0061 7.01542 13.0795L7.01517 13.097C6.97439 13.7786 6.80227 15.3036 6.44001 15.9505C6.39195 16.0471 6.37842 16.1205 6.36914 16.1709C6.35899 16.226 6.35392 16.2536 6.31437 16.2537L5.83476 16.2546C5.78427 16.2547 5.66311 16.2549 5.58252 16.356C5.53945 16.4101 5.46396 16.4088 5.38182 16.4074C5.27187 16.4056 5.15 16.4035 5.078 16.5337C5.00093 16.673 5.01685 16.8219 5.02506 16.8987C5.02685 16.9154 5.02827 16.9286 5.02829 16.9377L4.27101 16.9391C4.17845 16.9393 3.99342 16.9851 3.99377 17.1668L3.99665 18.6814C3.9967 18.709 3.99866 18.7315 4.00027 18.75L4.00027 18.75C4.00281 18.7792 4.00446 18.7981 3.99622 18.8103C3.98108 18.8329 3.93259 18.833 3.79505 18.8332H3.79502H3.79499L3.13868 18.8345C3.09655 18.8345 3.01248 18.8398 3.0129 19.0619L3.0142 19.7434C3.01429 19.7939 3.01448 19.8949 3.24167 19.8945L12.4529 19.877C12.6801 19.8765 12.6799 19.7756 12.6798 19.7251L12.6785 19.0435C12.6781 18.8214 12.594 18.8165 12.5519 18.8166L11.8955 18.8178H11.8955L11.8955 18.8178H11.8955H11.8955H11.8955H11.8954C11.7579 18.8181 11.7095 18.8182 11.6942 18.7957C11.6859 18.7835 11.6875 18.7646 11.69 18.7354L11.69 18.7354C11.6915 18.7169 11.6934 18.6943 11.6933 18.6668L11.6904 17.1522C11.6901 16.9704 11.5049 16.9254 11.4123 16.9255L10.6551 16.927C10.655 16.918 10.6564 16.9047 10.6581 16.888L10.6581 16.888C10.666 16.8112 10.6814 16.6623 10.6038 16.5232C10.5313 16.3933 10.4094 16.3958 10.2995 16.3981C10.2174 16.3998 10.1419 16.4013 10.0986 16.3474C10.0176 16.2466 9.89647 16.2469 9.84599 16.247L9.36638 16.2479C9.32683 16.2479 9.32165 16.2204 9.3113 16.1654C9.30182 16.115 9.28801 16.0416 9.23959 15.9452C8.87486 15.2997 8.69695 13.7753 8.65358 13.0939L8.65326 13.0764C8.65133 13.003 8.64887 12.9096 8.90548 12.8157C9.6924 12.4709 10.5939 11.3232 10.9463 10.7924C10.9558 10.7924 10.9725 10.7932 10.9953 10.7942C11.1547 10.8015 11.6155 10.8226 12.0568 10.6893C12.5866 10.5621 13.2676 10.2579 13.7713 9.65112C14.4884 8.86777 15.0775 5.89048 15.3531 4.49749L15.3531 4.49748L15.3531 4.49738C15.4067 4.22666 15.4484 4.0158 15.4769 3.89251C15.6171 3.28642 15.181 3.15262 14.9454 3.16148L13.027 3.16513C13.0513 2.68547 13.1099 1.63526 13.1496 1.27169C13.1611 1.16656 13.1532 1.08849 13.1337 1.03123ZM0.9621 4.72289C0.904206 4.46134 0.828114 4.11757 1.12328 4.11757H2.31678C2.5274 4.11757 2.72046 4.92494 2.87843 5.73232C3.03641 6.5397 3.79112 8.86821 4.14215 9.59368C3.6507 9.75749 2.51335 9.64985 1.89554 7.90872C1.27773 6.1676 1.03553 5.08292 0.98287 4.81964C0.976821 4.78939 0.969614 4.75683 0.9621 4.72289ZM14.3394 3.98821C14.6345 3.98306 14.5644 4.3281 14.5111 4.59062C14.5042 4.62469 14.4975 4.65737 14.492 4.68772C14.444 4.95187 14.2207 6.04062 13.6334 7.79226C13.0461 9.5439 11.9108 9.67138 11.4165 9.51617C11.7548 8.78469 12.4688 6.44336 12.6127 5.63334C12.7565 4.82333 12.9355 4.01271 13.146 4.00904L14.3394 3.98821ZM7.79403 8.50601L9.49569 7.39316L7.81378 9.90188L7.81379 9.90245L7.81359 9.90217L7.81341 9.90244L7.8134 9.9019L6.06191 7.44126L7.79403 8.50601ZM7.72811 3.75556L7.72813 3.75751L9.49703 6.70836L7.78484 7.80742L7.78485 7.80804L7.78435 7.80774L7.78376 7.80812L7.78375 7.80737L6.04146 6.75669L7.72704 3.75746L7.72701 3.75563L7.72755 3.75654L7.72811 3.75556Z" />
          </svg>

          <span className='pl-2'>Prizes</span>
        </a>
      </Link>

      <Link
        href='/account'
        as='/account'
        shallow
      >
        <a
          className={classnames(
            'h-full w-full flex justify-start items-center px-10 text-xxs sm:text-base py-1 sm:py-2 px-3 sm:px-10 trans tracking-wider outline-none focus:outline-none active:outline-none',
            {
              'text-accent-3 hover:text-highlight-2': !accountPage,
              'text-highlight-2 hover:text-highlight-2': accountPage
            }
          )}
        >
          <svg
            style={{
              width: 28
            }}
            className='fill-current'
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 13.9844C5.46875 16.1406 7.46875 17.2188 10 17.2188C12.5312 17.2188 14.5312 16.1406 16 13.9844C15.9688 13.1094 15.2656 12.375 13.8906 11.7812C12.5156 11.1875 11.2188 10.8906 10 10.8906C8.78125 10.8906 7.48438 11.1875 6.10938 11.7812C4.73438 12.3438 4.03125 13.0781 4 13.9844ZM12.1094 3.90625C11.5156 3.3125 10.8125 3.01562 10 3.01562C9.1875 3.01562 8.48438 3.3125 7.89062 3.90625C7.29688 4.5 7 5.20312 7 6.01562C7 6.82812 7.29688 7.53125 7.89062 8.125C8.48438 8.71875 9.1875 9.01562 10 9.01562C10.8125 9.01562 11.5156 8.71875 12.1094 8.125C12.7031 7.53125 13 6.82812 13 6.01562C13 5.20312 12.7031 4.5 12.1094 3.90625ZM2.92188 2.96875C4.89062 1 7.25 0.015625 10 0.015625C12.75 0.015625 15.0938 1 17.0312 2.96875C19 4.90625 19.9844 7.25 19.9844 10C19.9844 12.75 19 15.1094 17.0312 17.0781C15.0938 19.0156 12.75 19.9844 10 19.9844C7.25 19.9844 4.89062 19.0156 2.92188 17.0781C0.984375 15.1094 0.015625 12.75 0.015625 10C0.015625 7.25 0.984375 4.90625 2.92188 2.96875Z" />
          </svg>

          <span className='pl-2'>Account</span>
        </a>
      </Link>
    </nav>


    {/* <div className='nav-and-footer-container'>
      <nav
        className='nav-min-height flex items-center h-full justify-between flex-wrap'
      >
        <div
          className='nav--account-controls-container flex justify-end h-full items-center text-right'
        >
          <div className='mr-2 sm:mr-4'>
          </div>
        </div>
      </nav>
    </div> */}
  </>
    
}
