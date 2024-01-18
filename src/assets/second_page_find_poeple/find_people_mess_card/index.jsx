import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress'; // 导入加载动画组件

import '/src/App.css';

const FindPeopleMessCard = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [salaryRange, setSalaryRange] = useState([180, 300]);
  const [visibility, setVisibility] = useState('everyone');
  const [expertise, setExpertise] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false); // 添加加载状态

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSalaryChange = (event, newValue) => {
    setSalaryRange(newValue);
  };

  const handleVisibilityChange = (newVisibility) => {
    setVisibility(newVisibility);
  };

  const handleExpertiseChange = (event) => {
    setExpertise(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true); // 开始加载时设置为true

    const formData = {
      name,
      age,
      phone,
      email,
      gender,
      salaryRange,
      visibility,
      expertise
    };

    const url = 'https://script.google.com/macros/s/AKfycbwcGoxZnM-6Zst-s4iPDpXQHyoDmw7H2iAwEh6CeEWXRFAjrHmto_GcVe3Z2WQpxx5CVw/exec';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(formData),
      });

        console.log('Data submitted successfully');

        const redirectTo = 'https://papayay.github.io/web_app_add/'

        console.log('Redirecting to:', redirectTo);
        window.location.href = redirectTo;
      
    } catch (error) {
      const redirectTo = 'https://papayay.github.io/web_app_add/'
      window.location.href = redirectTo;
      console.error('Error submitting data:', error);
    } finally {
      const redirectTo = 'https://papayay.github.io/web_app_add/'
      window.location.href = redirectTo;
      setIsSubmitting(false); // 结束加载时设置为false
    }
  };

  return (
    <div className="find-people-mess-card">
      <form onSubmit={handleSubmit}>
        <TextField
          label="你的名字"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <Box sx={{ minWidth: 120, mt: 2 }}>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="demo-simple-select-outlined-label">年龄</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleAgeChange}
              label="年齡"
              className="input-field"
            >
              <MenuItem value={18}>18</MenuItem>
              <MenuItem value={19}>19</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={21}>21</MenuItem>
              <MenuItem value={22}>22</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <TextField
            label="電話"
            variant="outlined"
            fullWidth
            margin="normal"
            value={phone}
            onChange={handlePhoneChange}
            className="input-field"
          />
          <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
            示範：09-05594633
          </Typography>
        </Box>
        <Box sx={{ minWidth: 120, mt: 2 }}>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="gender-select-label">性别</InputLabel>
            <Select
              labelId="gender-select-label"
              id="gender-select"
              value={gender}
              onChange={handleGenderChange}
              label="性别"
              className="input-field"
            >
              <MenuItem value="male">男</MenuItem>
              <MenuItem value="female">女</MenuItem>
              <MenuItem value="unspecified">不想说</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120, mt: 2 }}>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
            期待薪資
          </Typography>
          <FormControl fullWidth margin="normal">
            <Slider
              getAriaLabel={() => '期望薪資'}
              value={salaryRange}
              onChange={handleSalaryChange}
              valueLabelDisplay="auto"
              min={180}
              max={300}
              getAriaValueText={(value) => `${value}`}
            />
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120, mt: 2 }}>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="expertise-select-label">擅長的事</InputLabel>
            <Select
              labelId="expertise-select-label"
              id="expertise-select"
              multiple
              value={expertise}
              onChange={handleExpertiseChange}
              renderValue={(selected) => selected.join(', ')}
              label="擅长的事"
            >
              <MenuItem value="webDesign">網頁設計</MenuItem>
              <MenuItem value="dataAnalysis">數據分析</MenuItem>
              <MenuItem value="webCrawling">爬蟲</MenuItem>
              <MenuItem value="what_you_talk_about">這啥</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
            所有人都可以看嗎？
          </Typography>
          <Button
            variant={visibility === 'everyone' ? "contained" : "outlined"}
            color="secondary"
            onClick={() => handleVisibilityChange('everyone')}
          >
            所有人都可以看
          </Button>
          <Button
            variant={visibility === 'teachersOnly' ? "contained" : "outlined"}
            color="secondary"
            onClick={() => handleVisibilityChange('teachersOnly')}
          >
            僅老師可以看
          </Button>
        </Box>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          {/* 加载动画或提交按钮 */}
          {isSubmitting ? (
            <CircularProgress color="primary" size={24} />
          ) : (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="button"
              fullWidth
            >
              提交
            </Button>
          )}
        </Box>
      </form>
    </div>
  );
};

export default FindPeopleMessCard;