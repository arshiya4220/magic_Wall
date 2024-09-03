import React, { useState } from 'react';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa6';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { FiThumbsUp } from 'react-icons/fi';
import { GoDot } from 'react-icons/go';

const Wish = () => {
  const [wishMsg, setWishMsg] = useState([
    { key: 1, value: 'I wish I could soar high in the sky, like an eagle keeping eye over lands near and far.', count: 54, date: '1/5/2023' },
    { key: 2, value: 'I wish you were here.', count: 10, date: '14/6/2023' },
    { key: 3, value: 'I wish I could live in a log cabin, high up in the mountains where I could see all the stars at night.', count: 14, date: '21/7/2023' },
    { key: 4, value: 'I wish I were the clouds and I wish I were the trees and I wish I were the birds who float upon the breeze. I wish I were the sun and I wish I were the horizon and I wish I were the colors that every day the sky tries on.', count: 13, date: '9/8/2023' },
    { key: 5, value: 'I wish I wish you knew that you will never have all the answers and that’s okay, because one day you will look back and see how everything fell into place.', count: 52, date: '1/5/2024' },
    { key: 6, value: 'I wish I were the night and I wish I were the moon and I wish I were the stars whose twinkling makes me swoon. I wish I were a rose and I wish I were the dew and I wish I were the dawn when I wake up next to you.', count: 99, date: '17/8/2024' },
  ]);

  const [shareWish, setShareWish] = useState('');
  const [formVisible, setFormVisible] = useState(false);

  const addWish = (e) => {
    e.preventDefault();
    if (shareWish.trim() === '') return;

    const newWishItem = {
      key: wishMsg.length + 1,
      value: shareWish,
      count: 0,
      date: new Date().toLocaleDateString(),
      liked: false
    };

    setWishMsg([...wishMsg, newWishItem]);
    setShareWish('');
    setFormVisible(false);
  };

  const increment = (index) => {
    const newWishList = [...wishMsg];
    const wishItem = newWishList[index];
    wishItem.count += 1;
    wishItem.liked = true; // Toggle the liked state
    setWishMsg(newWishList);
  };

  const msgItems = wishMsg.map((msg, index) => (
    <ul className='bg-[#b2b9d1] md:font-medium font-semibold rounded-[25%] bg-transparent h-fit md:p-8 p-2 m-4 md:m-8' key={msg.key}>
      <p className='text-lg'>{msg.value}</p>
      <div className='flex mt-4 space-x-6'>
        <div><GoDot size={20} color='red' /></div>
        <div className='flex space-x-2'>
        {msg.liked ? (
            <FaThumbsUp
              onClick={() => increment(index)}
              size={20}
              className='cursor-pointer text-black'
            />
          ) : (
            <FaRegThumbsUp
              onClick={() => increment(index)}
              size={20}
              className='cursor-pointer text-black'
            />
          )}
          <div className='font-normal'>{msg.count}</div>
        </div>
        <div className='font-normal'>{msg.date}</div>
      </div>
    </ul>
  ));

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        {msgItems}
      </div>
      <div className='h-[100%] relative'>
        <div
          onClick={() => setFormVisible(!formVisible)}
          className='border-2 border-[#0a0b68] bg-gradient-to-tl from-transparent via-white to-transparent ring-offset-blue-600 ring-2 ring-offset-4 shadow-xl shadow-blue-700 px-6 py-2 rounded-[28%] ml-6 mb-4 fixed bottom-0 left-0 cursor-pointer'
        >
          <p className='flex font-semibold'>Drop your wish <FaArrowTrendUp className='pl-1' size={28} /></p>
        </div>
        {formVisible && (
          <div className='fixed w-[80%] md:h-[60%] h-[40%] top-[20%] left-[10%] bg-gradient-to-b from-current via-transparent to-current border-lg border-x-2 border-y-4 shadow-md shadow-black border-blue-900'>
            <form onSubmit={addWish} className='pt-[3%] rounded-md my-[10%] md:mx-20 mx-4 h-28 md:h-44 text-center bg-[#dfe1e6]'>
              <input
                value={shareWish}
                onChange={(e) => setShareWish(e.target.value)}
                className='md:mt-[0] mt-1 shadow-md shadow-slate-600 w-[85%] md:h-20 h-12 text-xl pl-6 md:placeholder:pl-5 placeholder:text-black placeholder:text-base md:placeholder:text-xl bg-transparent border-2 border-blue-800 rounded-md'
                type='text'
                placeholder='Share Your Wish Here'
              />
              <div className='flex justify-around my-8'>
                <button type='submit' className='bg-[#848fcf] border-2 shadow-md shadow-white border-blue-900 rounded-md font-bold md:text-md text-blue-950 md:py-4 md:px-8 py-1 px-2 '>
                  SHARE
                </button>
                <button
                  type='button'
                  onClick={() => setFormVisible(!formVisible)}
                   className='bg-[#848fcf] border-2 shadow-md shadow-white border-blue-900 rounded-md font-bold md:text-md text-blue-950 md:py-4 md:px-8 py-1 px-2 '
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Wish;
